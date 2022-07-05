import React, { useEffect, useState } from "react";
import "../css/Table.css";
import axios from "axios";

function Table() {
  const [post, setPost] = useState([]);
  //   const [count, setCount] = useState(1);
  useEffect(() => {
    async function getData() {
      const data = await axios
        .get("https://jsonplaceholder.typicode.com/photos")
        .then((res) => {
          setPost(res.data);
        })
        .catch((err) => {
          console.log(err);
        });

      console.log("type:", typeof data);
    }

    getData();
  }, []);
  return (
    <div>
      <table className="table">
        <tbody>
          <tr>
            <th>AlbumId</th>
            <th>Id</th>
            <th>Title</th>
            <th>Url</th>
            <th>Thumbnailurl</th>
          </tr>

          {console.log("post:", post)}
          {post.map((data) => {
            return (
              <tr key={data.id}>
                <td>{data.albumId}</td>
                <td>{data.id}</td>
                <td>{data.title}</td>
                <td className="blueTd">{data.url}</td>
                <td className="turl">{data.thumbnailUrl}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
