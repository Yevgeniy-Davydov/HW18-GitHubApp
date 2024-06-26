const API_TOKEN = "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";
const API_URL = "https://api.github.com";

export const getUser = async (userName) => {
  const response = await fetch(`${API_URL}/users/${userName}`, {
    headers: {
      Authorization: `Bearer ${API_TOKEN}`,
    },
  });
  const data = await response.json();

  // Error handling
  if (!response.ok) {
    throw new Error(data.message);
  }

  return data;
};

export const getFollowers = async (userName, amount = 10) => {
  const response = await fetch(
    `${API_URL}/users/${userName}/followers?per_page=${amount}`,
    {
      headers: {
        Authorization: `Bearer ${API_TOKEN}`,
      },
    }
  );
  const data = await response.json();

  // Error handling
  if (!response.ok) {
    throw new Error(data.message);
  }

  return data;
};

export const getRepositories = async (userName, amount = 5) => {
  const response = await fetch(
    `${API_URL}/users/${userName}/repos?per_page=${amount}`,
    {
      headers: {
        Authorization: `Bearer ${API_TOKEN}`,
      },
    }
  );
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message);
  }

  return data;
};
