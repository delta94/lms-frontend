export const authenticate = async (authType, data) => {
  const options = {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "content-type": "application/json",
    },
  };

  const tokenRes = await fetch(
    `${process.env.REACT_APP_BE_ENDPOINT}/auth/${authType}`,
    options
  );

  const tokenData = await tokenRes.json();

  const userRes = await fetch(`${process.env.REACT_APP_BE_ENDPOINT}/auth/me`, {
    method: "GET",
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${tokenData.token}`,
    },
  });

  const userData = await userRes.json();

  const user = { token: tokenData.token, ...userData.data };
  localStorage.setItem("user", JSON.stringify(user));

  return user;
};
