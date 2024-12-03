export const getAllUsers = async () => {
    try {
      const response = await fetch('https://localhost:7012/Administration/GetAllUsers', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include'
      });
  
      const data = await response.json();
  
      return {
        status: response.status,
        statusText: response.statusText,
        data: data,
      };
    } catch (error) {
      console.error('Error during login:', error);
      throw error;
    }
  };
  