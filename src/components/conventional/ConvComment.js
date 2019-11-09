import React from "react";
import { Button, Modal, List } from "semantic-ui-react";
import { fields } from "./ConvFields";
import ConvCommentItem from "./ConvCommentItem";

class ConvComment extends React.Component {
  render() {
    return (
      <Modal trigger={<Button>Generate Comment</Button>}>
        <Modal.Header>Copy Comment into Cadence</Modal.Header>
        <Modal.Content>
          <Modal.Description>
            <List>
              {fields.map(({ name, days, id, label }) => (
                <ConvCommentItem
                  key={id}
                  name={name}
                  label={label}
                  days={days}
                  value={this.props.value}
                  addDays={this.props.addDays}
                  addBusinessDays={this.props.addBusinessDays}
                />
              ))}
            </List>
          </Modal.Description>
        </Modal.Content>
      </Modal>
    );
  }
}

export default ConvComment;
