import axios from "axios";

const basePath = "https://jsonplaceholder.typicode.com/";

const fakeAuth = { login: "admin", password: "admin" };

export const getToken = ({
  login,
  password,
}: {
  login: string;
  password: string;
}) => {
  const config = {
    data: {
      login,
      password,
    },
  };

  // return  axios.get(basePath + "auth", config);
  return new Promise<{ data?: string }>((resolve, reject) => {
    setTimeout(() => {
      if (fakeAuth.login === login && fakeAuth.password === password) {
        resolve({ data: "true" });
      } else {
        reject(new Error("Wrong login or password"));
      }
    }, 3000);
  });
};
