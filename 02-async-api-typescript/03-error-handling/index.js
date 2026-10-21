import axios from "axios";

async function ambilData() {
  try {
    let response = await axios.get(
      "https://jsonplaceholder.typicode.com/user-salah"
    );

    console.log(response.data);
  } catch (error) {
    console.log("Terjadi error:", error.message);
  }
}

ambilData();