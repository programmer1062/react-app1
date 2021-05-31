import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

export default function App() {
  return (
    <div>
      <TwitterDemo></TwitterDemo>
    </div>
  );
}

const TwitterDemo = () => {
  const [textInput, setTextInput] = useState("");
  const updateTextInput = (e) => setTextInput(e.target.value);

  const [list, setList] = useState([]);
  const postTweet = () => {
    setList([textInput, ...list]);
    setTextInput("");
  };

  const deleteTweet = (item, index) => {
    list.splice(index, 1);

    setList([...list]);
  };
  return (
    <div>
      <h1 className="bg-primary text-light p-3">Mini Twitter</h1>

      <div className="alert alert-dark row">
        <input
          type="text"
          value={textInput}
          onChange={(e) => updateTextInput(e)}
          className="form-control mb-1"
          placeholder="post tweet"
        />
        <input
          type="button"
          className="btn btn-dark"
          onClick={() => postTweet()}
          value="Tweet"
        />
      </div>

      {list.map((item, index) => (
        <div
          key={index}
          className="alert alert-secondary d-flex justify-content-between align-items-center"
        >
          {item}
          <button className="btn btn-outline-danger" onClick={deleteTweet}>
            X
          </button>
        </div>
      ))}
    </div>
  );
};

const InstaDemo = () => {
  const [list] = useState([1, 1, 1, 1, 1]);
  return (
    <div>
      <h1 className="bg-danger text-light p-3">Mini Instagram</h1>
      {list.map((item, index) => (
        <div
          key={index}
          className="alert-secondary m-3 rounded"
          style={{ height: "300px" }}
        >
          <img
            src={"https://picsum.photos/300" + index}
            className="rouded"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            alt=""
          />
        </div>
      ))}
    </div>
  );
};

const QuoteDemo = () => {
  const [list] = useState([1, 2, 3, 4, 5]);
  return (
    <div>
      <h1 className="bg-dark text-light p-3 sticky-top">Reat Bootstrap</h1>
      {list.map((item, index) => (
        <div className="alert-secondary p-3 m-3 rounded">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum natus
          accusantium eius non quod optio, ratione, unde nisi ducimus aspernatur
          libero id, officiis ut dicta doloribus ipsa obcaecati laborum
          similique? Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Perspiciatis quia ad tenetur quibusdam provident rerum impedit
          dolorum. Ratione dolor recusandae voluptatum culpa voluptate aperiam
          inventore, omnis deleniti facilis animi debitis!
        </div>
      ))}
    </div>
  );
};

const StyleDemo = () => {
  return (
    <div>
      <h1 style={{ backgroundColor: "turquoise" }}>Project Title</h1>
      <div className="beutify">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
        blanditiis doloremque animi necessitatibus esse quia iusto earum, beatae
        optio ducimus sint saepe aliquam omnis voluptatum, amet velit asperiores
        molestiae. Dicta.
      </div>
      <div className="beutify">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
        quisquam quasi sed rerum, eius corporis consequatur ratione? Officiis
        nulla rerum aspernatur eius ipsa? Numquam error temporibus unde iusto
        sunt autem?
      </div>
    </div>
  );
};

const MyTag = () => {
  const [list, setList] = useState([]);

  //step 1
  const [tweetIp, setTweet] = useState("");

  //step 2
  const readAndUpdate = (e) => {
    setTweet(e.target.value);
  };

  const postTweet = () => {
    setList([tweetIp, ...list]);
    setTweet("");
  };
  return (
    <div>
      <h1>Mini Twitter</h1>
      <div>
        <input
          type="text"
          value={tweetIp}
          onChange={(e) => readAndUpdate(e)}
          placeholder="Your thought.."
        />
        <input type="button" value="Tweet" onClick={() => postTweet()} />
      </div>

      <h2>Tweets</h2>
      {list.map((item, index) => (
        <div key={index}>{item}</div>
      ))}
    </div>
  );
};

const MyTag4 = () => {
  const [counter] = useState(1);
  return (
    <div>
      <h1>Inline Styling</h1>
      <div
        style={{
          backgroundColor: "violet",
        }}
      >
        {counter}
      </div>
    </div>
  );
};

const MyTag3 = () => {
  const [list, setList] = useState([1, Math.random()]);

  const updateList = () => {
    setList([Math.random(), ...list]); //cloning list
  };

  return (
    <div>
      <h1>List Example Component</h1>
      <div>
        <input
          type="button"
          value="Add new Element"
          onClick={() => updateList()}
        />
      </div>

      {list.map((item, index) => (
        <div key={index} className="beutify">
          {item}
        </div>
      ))}
    </div>
  );
};

const MyTag2 = () => {
  const [list] = useState(["Mumbai", "Patna", "Delhi", "Chennai"]);

  return (
    <div>
      <h1>List Example</h1>

      {list.map((item, index) => (
        <h3 key={index}>{item}</h3>
      ))}
    </div>
  );
};

const MyTag1 = () => {
  const [counter, setCounter] = useState(1);
  const [username, setUsername] = useState("Shubham");

  const updateUsername = () => {};
  const updateCounter = () => {};

  return (
    <div>
      <h1>Counter Example</h1>
      <div>Counter: {counter}</div>
      <div>Username: {username}</div>
    </div>
  );
};
