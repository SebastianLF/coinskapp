import React, { useState, useEffect, useRef } from "react";
import "../css/reset.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Badge, Button } from "react-bootstrap";
import { marked } from "marked";
import ListModal from "../components/modal";
import { FaRegClipboard, FaSave, FaRegCopy } from "react-icons/fa";

const containers = {
  display: "flex",
  height: "cacl(100vh - 68px)",
};

const container = {
  flexBasis: "50%",
  padding: "5px",
  display: "flex",
  flexDirection: "column",
  height: "100%",
  boxSizing: "border-box",
};

const subTitle = {
  fontSize: "1rem",
  margin: "5px 0",
};

const inputStyle = {
  padding: "20px",
  flexGrow: "1",
  flexShrink: "1",

  height: "calc(100vh - 100px)",
};

const outputStyle = {
  backgroundColor: "#DCDCDC",
  padding: "20px",
  height: "calc(100vh - 100px)",
  overflow: "scroll",
};

const saveButton = {
  padding: "0 5px",
  backgroundColor: "none",
};

const buttons = {
  display: "flex",
  justifyContent: "space-between",
};

const buttonsWrapper = {
  display: "flex",
  justifyContent: "space-between",
};

const HomePage = () => {
  const [markdown, setMarkdown] = useState("");
  const [show, setShow] = useState(false);
  const [posts, setPosts] = useState([
    { key: 1, text: "post #1" },
    { key: 2, text: "post #2" },
    { key: 3, text: "post #3" },
  ]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const outputRef = useRef(null);

  const scrollToBottom = () => {
    outputRef.current?.scrollIntoView({ behavior: "auto" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [markdown]);

  return (
    <div className="app">
      <ListModal
        show={show}
        handleClose={handleClose}
        handleShow={handleShow}
        posts={posts}
      ></ListModal>
      <div className="text-center">
        <h1>
          <Badge className="text-align-center" bg="secondary">
            Markdown Previewer
          </Badge>
        </h1>
      </div>
      <div style={containers}>
        <div style={container}>
          <div style={buttons}>
            <h2 style={subTitle}>Input</h2>
            <div style={buttonsWrapper}>
              <Button
                style={saveButton}
                variant="light"
                onClick={() =>
                  setPosts(posts.concat({ key: 4, text: "post #4" }))
                }
              >
                <FaSave />
              </Button>
              <Button variant="light" style={saveButton} onClick={handleShow}>
                <FaRegClipboard />
              </Button>
              <Button
                variant="light"
                style={saveButton}
                onClick={() =>
                  navigator.clipboard.writeText("Copy this text to clipboard")
                }
              >
                <FaRegCopy />
              </Button>
            </div>
          </div>

          <textarea
            style={inputStyle}
            value={markdown}
            onChange={(e) => {
              setMarkdown(e.target.value);
            }}
          ></textarea>
        </div>

        <div style={container}>
          <h2 style={subTitle}>Preview</h2>
          <div
            style={outputStyle}
            dangerouslySetInnerHTML={{ __html: marked.parse(markdown) }}
            ref={outputRef}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
