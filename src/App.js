import React from "react";
import photo from "./images/pexels-marta-dzedyshko-2067569.jpeg";
import Invert from "./components/invert";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.canvas = React.createRef();
    this.state = {
      goals: [
        { id: 1, goal: "Find a book on the future of architecture" },
        { id: 2, goal: "Find the top-most book about coffee" },
        { id: 3, goal: "Find divine food" },
      ],
    };
  }

  handleInfo() {
    const h = document.querySelector(".info");
    const i = document.querySelector(".icon");
    h.style.display = "block";
    i.style.display = "none";
  }

  handleClick(e, ctx) {
    const x = e.layerX;
    const y = e.layerY;
    const pixel = ctx.getImageData(x, y, 1, 1);
    const data = pixel.data;
    const rgba = `rgba(${data[0]}, ${data[1]}, ${data[2]}, ${data[3] / 255})`;
    document.body.style.backgroundColor = rgba;
    document.body.style.color = Invert(rgba);
    ctx.strokeStyle = "deeppink";
    ctx.lineWidth = 5;

    if (x >= 948 && x <= 948 + 287 && y >= 359 && y <= 359 + 338) {
      ctx.strokeRect(948, 359, 287, 338);
      const li = document.getElementById("3");
      li.style.textDecoration = "line-through";
    } else if (x >= 558 && x <= 558 + 287 && y >= 774 && y <= 774 + 372) {
      ctx.strokeRect(558, 774, 287, 372);
      const li = document.getElementById("2");
      li.style.textDecoration = "line-through";
    } else if (x >= 278 && x <= 278 + 295 && y >= 1674 && y <= 1674 + 440) {
      ctx.strokeRect(278, 1674, 295, 440);
      const li = document.getElementById("1");
      li.style.textDecoration = "line-through";
    }
  }

  componentDidMount() {
    const canvas = this.canvas.current;
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = photo;
    const ctx = canvas.getContext("2d");
    img.onload = function () {
      ctx.drawImage(img, 0, 0);
      img.style.display = "none";
    };
    const width = document.documentElement.clientWidth;
    canvas.width = width;

    canvas.addEventListener("click", (e) => {
      this.handleClick(e, ctx);
    });
  }

  componentWillUnmount() {
    const ctx = this.canvas.current;
    this.canvas.current.removeEventListener("click", (e) => {
      this.handleClick(e, ctx);
    });
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1 className="info">
            Try to click on the correct books && full, non-mobile screen is recommended
          </h1>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            onClick={this.handleInfo}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1}
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>

          <ul>
            {this.state.goals.map((x) => {
              return (
                <li id={x.id} key={x.id}>
                  {x.goal}
                </li>
              );
            })}
          </ul>
        </header>
        <canvas
          ref={this.canvas}
          width="300"
          height="2118"
          onClick={this.handleClick}
        ></canvas>
        <footer>TGT 2021 | Photo by Marta Dzedyshko from Pexels</footer>
      </div>
    );
  }
}

export default App;
