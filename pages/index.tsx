import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import { useState } from "react";
import axios from "axios"

export default function Home() {
  const [file, setFile] = useState(null);

  const uploadFile = async (e: any) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("file", file);

    const headers = {
      X_API_KEY: "",
      X_ROUTE_NAME: "",
      "Content-Type": "application/x-www-form-urlencoded",
    };

    const data = await axios({
      method: 'post',
      headers: headers,
      url: "http://3.81.11.234:8000/client",
      data: formData
    })
    console.log(data)
  }
    
  return (
    <div className="App d-flex flex-column justify-content-center align-items-center">
      <form onSubmit={uploadFile}>
        <div className="mb-3">
          <label htmlFor="formFile" className="form-label">
            Default file input example
          </label>
          <input
            onChange={(e) => setFile(e.target.files[0] as any)}
            className="form-control"
            type="file"
            id="formFile"
          />
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}