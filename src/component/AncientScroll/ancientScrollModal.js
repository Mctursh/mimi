"use client";

import { Modal } from "react-bootstrap";

function AncientScrollModal({
  show = true,
  children,
  headingText = "Happy Valentine Baby",
  bg = "#f4b8c1",
  onHide = () => {},
  ...props
}) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={show}
      onHide={onHide}
    >
      <Modal.Body
        style={{
          background: bg,
          padding: "0px",
          overflow: "hidden",
          borderRadius: "10px 10px 10px 10px",
        }}
      >
        {children}
      </Modal.Body>
    </Modal>
  );
}

export default AncientScrollModal;
