import React from "react";
import { Input, Form, Segment, Icon, Message, Table } from "semantic-ui-react";

const ConvItem = props => {
  let bkgnd = "";
  props.value[props.name] === "" || props.name === "closingDate"
    ? (bkgnd = "white")
    : props.compareDates(
        props.value[props.name],
        props.days,
        props.value.closingDate
      )
    ? (bkgnd = "rgba(0, 255, 0, 0.6)")
    : (bkgnd = "rgba(255, 0, 0, 0.6)");

  return (
    <Table.Row>
      <Table.Cell collapsing>{props.label}</Table.Cell>
      <Table.Cell>
        <Form.Field>
          <Input
            size="mini"
            style={{ width: "165px" }}
            type="date"
            label={props.text}
            name={props.name}
            onChange={props.handleChange}
            value={props.value[props.name]}
          />
        </Form.Field>
      </Table.Cell>
      <Table.Cell>
        {props.days ? (
          <Segment compact size="mini">
            Plus {props.days} Days
          </Segment>
        ) : (
          ""
        )}
      </Table.Cell>
      {props.name === "closingDate" ? (
        ""
      ) : (
        <Table.Cell style={{ backgroundColor: `${bkgnd}` }}>
          {!props.value[props.name] ? (
            <Message size="mini">
              <Icon name="long arrow alternate left" size="big" />
              Input a Date
            </Message>
          ) : props.name === "voe" || props.name === "voe2" ? (
            props.addBusinessDays(props.value[props.name], props.days)
          ) : (
            props.addDays(props.value[props.name], props.days)
          )}
        </Table.Cell>
      )}
    </Table.Row>
  );
};

export default ConvItem;
