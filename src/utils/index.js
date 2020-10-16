import { toast } from "react-toastify";

export const client = async (endpoint, { body, ...customConfig } = {}) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const headers = { "content-type": "application/json" };

  if (user?.token) {
    headers.authorization = `Bearer ${user.token}`;
  }

  const config = {
    method: body ? "POST" : "GET",
    ...customConfig,
    headers,
  };

  if (body) {
    config.body = JSON.stringify(body);
  }

  const res = await fetch(endpoint, config);
  const data = await res.json();

  if (!data.success) {
    return toast(data.message);
  }

  return data;
};

export const authenticate = async (authType, data) => {
  const tokenData = await client(
    `${process.env.REACT_APP_BE_ENDPOINT}/auth/${authType}`,
    { body: data }
  );

  if (tokenData.token) {
    let user = { token: tokenData.token };
    localStorage.setItem("user", JSON.stringify(user));

    const userData = await client(
      `${process.env.REACT_APP_BE_ENDPOINT}/auth/me`
    );

    user = { ...user, ...userData.data };
    localStorage.setItem("user", JSON.stringify(user));

    return user;
  }
};
