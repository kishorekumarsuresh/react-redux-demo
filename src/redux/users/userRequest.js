import axios  from "axios";

export function userRequest() {
    return axios.get("https://gorest.co.in/p/v2/users", {
      headers: {
        Authorizaton:
          "Bearer 0d1c0f5711b07c68f9aa845ecc00f75fc02f18e030c9d7e6040903b4968791e6",
      },
    })
    .then(response => {
      return Promise.resolve(response);
    })
    .catch(err => {
      return Promise.reject(err);
    })
}