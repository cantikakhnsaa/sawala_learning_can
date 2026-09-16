import { ambilUser } from "./api.js";

async function main() {
  try {
    let data = await ambilUser();

    console.log("Data user:");
    console.log(data);
  } catch (error) {
    console.log("Terjadi error:", error);
  }
}

main();