import axios from "axios";
import React, { useState } from "react";
import "../css/Table.css";

function GetDataById() {
  const [enter, setEnter] = useState(1);
  const [post, setPost] = useState([]);

  const handleClick = () => {
    console.log("hello");
    async function getData() {
      try {
        const data = await axios.get(
          `https://jsonplaceholder.typicode.com/photos/${enter}`
        );

        let newList = post;
        newList = newList.concat(data.data);

        setPost(newList);
        console.log("post->", data);
      } catch (error) {
        console.log(error);
      }
    }
    getData();
  };
  return (
    <>
      <center>
        <div>
          <input
            type="number"
            placeholder="Entrer id"
            value={enter}
            onChange={(e) => {
              setEnter(e.target.value);
            }}
          ></input>
        </div>
        <div>
          <button
            type="button"
            // onClick={(e) => {
            //   setCount(e.target.value);
            // }}
            onClick={handleClick}
          >
            Add post
          </button>
        </div>
      </center>
      <br />
      <br />
      <div>
        <center>
          <table>
            <tbody>
              {console.log("Post", post)}
              <tr>
                <th>AlbumId</th>
                <th>Id</th>
                <th>Title</th>
                <th>Url</th>
                <th>Thumbnailurl</th>
              </tr>
              {console.log("Post", post)}
              {post.map((val) => {
                return (
                  <tr key={val.id}>
                    <td>{val.albumId}</td>
                    <td>{val.id}</td>
                    <td>{val.title}</td>
                    <td>{val.url}</td>
                    <td>{val.thumbnailUrl}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </center>
      </div>
    </>
  );
}

export default GetDataById;
