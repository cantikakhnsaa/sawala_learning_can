import axios from "axios";

export async function ambilUser() {
  let response = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );

  return response.data;
}