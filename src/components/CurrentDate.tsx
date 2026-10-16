import { connection } from "next/server";

export default async function CurrentDate() {
  await connection();

  const date = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
    timeZone: "Asia/Dhaka",
  });

  return <p>{date}</p>;
}
