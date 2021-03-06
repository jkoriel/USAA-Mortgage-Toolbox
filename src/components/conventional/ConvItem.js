import React from "react";
import { Grid, Input, Form, Divider, Icon, Message } from "semantic-ui-react";

function addDays(date, days) {
  if (date.slice(0, 4) < 2018) {
    return "";
  } else {
    let result = new Date(date);
    result.setDate(result.getDate() + days + 1);
    return new Intl.DateTimeFormat("en-US").format(result);
  }
}

function calcWorkingDays(fromDate, days) {
  var count = 0;
  while (count <= days) {
    fromDate.setDate(fromDate.getDate() + 1);
    if (fromDate.getDay() !== 0 && fromDate.getDay() !== 6)
      // Skip weekends
      count++;
  }
  return new Intl.DateTimeFormat("en-US").format(fromDate);
}

const ConvItem = ({ name, days, label, value, handleChange, text }) => {
  return (
    <Grid.Row textAlign="center">
      {console.log("conv item value", value)}
      {console.log("conv item name", name)}
      <Grid.Column className="first-col" width="3">
        <label>{label}</label>
      </Grid.Column>
      <Grid.Column width="4">
        <p className="labels">{text}</p> <Divider />
        <Form.Field>
          <Input
            size="mini"
            style={{ width: "140px" }}
            type="date"
            name={name}
            onChange={handleChange}
            value={value}
          />
        </Form.Field>
      </Grid.Column>
      {name === "closingDate" ? (
        ""
      ) : (
        <Grid.Column className="result" width="3">
          <p>Plus {days} days</p> <Divider />
          {!value ? (
            <Message size="mini">
              <Icon name="long arrow alternate left" size="big" />
              Input a Date
            </Message>
          ) : name === "voe" ? (
            calcWorkingDays(new Date(value), days)
          ) : (
            addDays(value, days)
          )}
        </Grid.Column>
      )}
      <Grid.Column width="2"></Grid.Column>
    </Grid.Row>
  );
};

export default ConvItem;
