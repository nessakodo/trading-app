const API_BASE_URL = 'http://localhost:5000/api';

async function login(email, password) {
  const response = await fetch(`${API_BASE_URL}/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });

  if (response.ok) {
    const data = await response.json();
    // Store the authentication data (e.g., token) as needed
    return data;
  } else {
    throw new Error('Login failed');
  }
}

async function register(username, email, password) {
  const response = await fetch(`${API_BASE_URL}/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, email, password }),
  });

  if (response.ok) {
    const data = await response.json();
    // Store the registration data as needed
    return data;
  } else {
    throw new Error('Registration failed');
  }
}

export { login, register };
