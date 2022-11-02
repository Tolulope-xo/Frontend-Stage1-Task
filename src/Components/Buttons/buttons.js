import React from "react";
import slack from "../assets/slack.png";
import github from "../assets/Icon.png";
import "../Buttons/buttons.scss";

const buttons = () => {
  return (
    <div className="buttons1">
      <div className="buttons2">
        <button>
          <a id="Ayo__tomiwa" href="/#">
            Twitter Link
          </a>
        </button>
        <button>
          <a id="btn__zuri" href="https://training.zuri.team">
            Zuri Team
          </a>
        </button>
        <button>
          <a id="books" href="http://books.zuri.team">
            Zuri Books
          </a>
        </button>
        <button>
          <a
            id="book__python"
            href="https://books.zuri.team/python-for-beginners?ref_id=<yourslackname>"
          >
            Python Books
          </a>
        </button>
        <button>
          <a id="pitch" href="https://background.zuri.team">
            Background Check for Coders
          </a>
        </button>
        <button>
          <a
            id="book__design"
            href="https://books.zuri.team/design-rules"
          >
            Design Books
          </a>
        </button>
      </div>
      <div className="socials">
        <img id="Tolulope-xo" src={slack} alt="slack" />
        <img src={github} alt="github" />
      </div>
    </div>
  );
};

export default buttons;
