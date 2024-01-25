// pages/api/your_doctorapi.js
import axios from 'axios';

let GlobalData:any = null;
export default function doctorapi(req:any, res:any) {
    if (req.method === 'POST') {
      // The JSON data is available in req.body
      const data = req.body;
      GlobalData = data;
      console.log(data); // You can see the data in your server console
  
      // Process your data here
  
      // res.status(200).json({ message: "Data received", data });
      //push user to home page
      res.writeHead(302, { Location: 'http://localhost:3000/' });
      res.end();

      
    }
    
    else if (req.method === 'GET') {
      res.status(200).json({ message: "Data sent", GlobalData });
      console.log("im in get method",GlobalData);

    }
    
    else {
      // Handle any other HTTP method
      res.status(405).send({ error: "Only POST requests allowed" });
    }
  }
  

  