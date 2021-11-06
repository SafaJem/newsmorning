
export default function (user = { token: "", username: "" }, action) {
  if (action.type == "addToken") {
    console.log("TOKEN", action.token);
    return { token: action.token, username: user.username };
  } else if (action.type == "addName") {
    return { token: user.token, username: action.username };
  } else {
    return user;
  }
}
