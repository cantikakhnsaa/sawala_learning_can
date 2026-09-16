import axios from "axios";

async function ambilData() {
  try {
    let response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );

    console.log("Status:", response.status);
    console.log("Data:", response.data);
  } catch (error) {
    console.log("Terjadi error:", error.message);
  }
}

ambilData();