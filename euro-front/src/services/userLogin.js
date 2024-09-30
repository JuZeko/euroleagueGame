export const userLogin = async (loginData) => {
  try {
    const response = await fetch('https://localhost:7012/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(loginData),
      credentials: 'include' // Important for session cookies
    });

    const data = await response.json(); // Parse the response

    return {
      status: response.status,
      statusText: response.statusText,
      data: data,  // Parsed JSON response
    };
  } catch (error) {
    console.error('Error during login:', error);
    throw error; // Rethrow error to be handled in the calling function
  }
};
