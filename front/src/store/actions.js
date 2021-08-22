const generate_client_uuid = ({ commit }) => {
  const uuid = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
    /[xy]/g,
    function (c) {
      var r = (Math.random() * 16) | 0,
        v = c == "x" ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    }
  );
  commit("SET_CLIENT_UUID", uuid);
};

const login = async ({ commit, state }) => {
  // generate pin
  const response = await fetch("https://plex.tv/api/v2/pins", {
    method: "POST",
    body: JSON.stringify({ strong: true }),
    headers: {
      "X-Plex-Product": state.plex_product,
      "X-Plex-Client-Identifier": state.client_uuid,
      Accept: "application/json",
      "Content-type": "application/json",
    },
  });
  const data = await response;
  const json_data = await data.json();
  const plex_pin = json_data["id"];
  const plex_code = json_data["code"];
  commit("SET_PLEX_PIN", plex_pin);
  commit("SET_PLEX_CODE", plex_code);

  // send user to the auth app url
  const authAppUrl =
    "https://app.plex.tv/auth#?" +
    require("qs").stringify({
      clientID: state.client_uuid,
      code: state.plex_code,
      context: {
        device: {
          product: state.plex_product,
        },
      },
    });
  window.open(authAppUrl);

  // poll for user login
  var auth_token = null;
  while (auth_token === null) {
    const auth_response = await fetch(
      `https://plex.tv/api/v2/pins/${state.plex_pin}#?code=${state.plex_code}`,
      {
        method: "GET",
        headers: {
          "X-Plex-Client-Identifier": state.client_uuid,
          Accept: "application/json",
          "Content-type": "application/json",
        },
      }
    );
    const auth_data = await auth_response;
    const json_auth_data = await auth_data.json();
    auth_token = json_auth_data["authToken"];
    await new Promise((r) => setTimeout(r, 1000));
  }
  commit("SET_AUTH_TOKEN", auth_token);
};

export default {
  generate_client_uuid,
  login,
};
