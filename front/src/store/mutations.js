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

const SET_USER_UUID = (state, user_uuid) => {
  state.user_uuid = user_uuid;
};

const SET_USERNAME = (state, username) => {
  state.username = username;
};

const SET_AVATAR_URL = (state, avatar_url) => {
  state.avatar_url = avatar_url;
};

const SET_LOGIN_STATE = (state, login_state) => {
  state.logged_in = login_state;
};

export default {
  SET_CLIENT_UUID,
  SET_PLEX_PIN,
  SET_PLEX_CODE,
  SET_AUTH_TOKEN,
  SET_USER_UUID,
  SET_USERNAME,
  SET_AVATAR_URL,
  SET_LOGIN_STATE,
};
