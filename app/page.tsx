import axios from "axios";

import { Analytics } from "@vercel/analytics/react";

import { Home } from "./components/home";

import { getServerSideConfig } from "./config/server";

const serverConfig = getServerSideConfig();

export async function fetchData() {
  const result = await axios.get("http://localhost:3000/api/doctorapi");
  console.log("im at client inside ferchdata", result.data);
  console.log("coming from postman");
  return result;
}

// export async function fetchChatData(req:any) {
//   if (req.method === 'POST') {
//     // Process a POST request
//     console.log("im at client inside new fetchChatdata",req.body);
//     // console.log("coming from postman")
//     // res.status(200).json({ text: 'Hello' })
//   }
// }

export default async function App() {
  return (
    <>
      <Home />
      {serverConfig?.isVercel && <Analytics />}
    </>
  );
}
