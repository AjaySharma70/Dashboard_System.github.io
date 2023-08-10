import React from "react";
import { Modal, Image} from "semantic-ui-react";

const ModalMessage = ({ open, setOpen, img, name, message,id, handleDelete, }) => {
    return (
        <Modal
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            open={open} style={{position:"relative"}}>
            <Modal.Header>Message Details</Modal.Header><Modal.Content image>
                <Image size="medium" src={img} wrapped />
                <Modal.Description>
                    <p><strong>Name: {name}</strong></p>
                    <p>Message: {message}</p>
                </Modal.Description>
            </Modal.Content>
            <Modal.Actions>
            <button type="button" className="btn btn-dark" style={{ fontSize: "12px", marginRight:"10px" }} onClick={() => setOpen(false)}>Cancel</button>
            <button type="button" content="Delete" labelPosition="right" className="btn btn-danger" style={{ fontSize: "12px" }} onClick={() => handleDelete(id)}>Delete</button>
            </Modal.Actions>
        </Modal>
    );
};
export default ModalMessage;