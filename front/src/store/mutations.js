const SET_CLIENT_UUID = (state, uuid) => {
  state.client_uuid = uuid;
};

const SET_PLEX_PIN = (state, pin) => {
  state.plex_pin = pin;
};

const SET_PLEX_CODE = (state, code) => {
  state.plex_code = code;
};

const SET_AUTH_TOKEN = (state, token) => {
  state.auth_token = token;
};

export default {
  SET_CLIENT_UUID,
  SET_PLEX_PIN,
  SET_PLEX_CODE,
  SET_AUTH_TOKEN,
};
