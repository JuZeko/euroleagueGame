import axios from "axios";

export const getAllUsers = async () => {
  try {
    const response = await fetch(
      "https://localhost:7012/Administration/GetAllUsers",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      }
    );

    const data = await response.json();

    return {
      status: response.status,
      statusText: response.statusText,
      data: data,
    };
  } catch (error) {
    console.error("Error during login:", error);
    throw error;
  }
};

// NEED TO CREATE A ERROR MODAL TO RETURN ERROR MESSAGE TO USER ABOUT ERROR
export const createUser = async (FormValues: any) => {
  console.log(FormValues);
  try {
    const response = await axios.post(
      "https://localhost:7012/Administration/CreateUser",
      {
        username: FormValues.userName,
        email: FormValues.email,
        password: FormValues.password,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error creating user:", error);
    return error;
  }
};
