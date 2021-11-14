import * as React from "react";
import "../css/reset.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Button, Modal } from "react-bootstrap";

function ListModal(props) {
  return (
    <Modal show={props.show} onHide={props.handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>My posts</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ul>
          {props.posts.map((post) => (
            <li key={post.key}>
              <a href={`/${post.key}`}>{post.text}</a>
            </li>
          ))}
        </ul>
      </Modal.Body>
    </Modal>
  );
}

export default ListModal;
