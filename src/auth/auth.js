import Cookies from "js-cookie";

const USER_KEY = "currentUser";
const EXPIRES_KEY = "sessionExpiresAt"; // пазим timestamp, за да знаем кога да лог-аутнем

export function startSession(user, minutes = 10) {
  const expiresAt = Date.now() + minutes * 60 * 1000; // when the session will exxpire
  const days = minutes / (60 * 24);   // js-cookie bibl. works with days!!!!!

  Cookies.set("session", "1", { expires: days });  // session 1 - there is a logged user, active session
  Cookies.set(EXPIRES_KEY, String(expiresAt), { expires: days }); // expiration timestamp

  localStorage.setItem(USER_KEY, JSON.stringify(user)); // UI who is logged? 

  return expiresAt;
}

export function getCurrentUser() {
  const raw = localStorage.getItem(USER_KEY);
  return raw ? JSON.parse(raw) : null;
}

export function getSessionExpiresAt() {
  const v = Cookies.get(EXPIRES_KEY);
  return v ? Number(v) : null;
}

export function endSession() {
  Cookies.remove("session");
  Cookies.remove(EXPIRES_KEY);
  localStorage.removeItem(USER_KEY);
}

export function getDisplayName(user) {
  if (!user) return "";
  return user.firstName;
}
