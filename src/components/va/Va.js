import React from "react";
import { Container, Grid, Header, Button } from "semantic-ui-react";
import VaItem from "./VaItem";
import { fields } from "./VaFields";
import VaComment from "./VaComment";

class Va extends React.Component {
  state = {
    closingDate: "",
    borrowerPaystubs: "",
    les: "",
    creditReport: "",
    bankStatement: "",
    appraisal: "",
    titleCommitment: "",
    voe: "",
    thirdPartyVoe: "",
    selfEmployedVoe: "",
    voi: "",
    addDays: ""
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  addDays(date, days) {
    if (date.slice(0, 4) < 2018) {
      return "";
    } else {
      let result = new Date(date);
      result.setDate(result.getDate() + days + 1);
      return new Intl.DateTimeFormat("en-US").format(result);
    }
  }

  addBusinessDays(fromDate, days) {
    var count = 0;
    while (count <= days) {
      fromDate.setDate(fromDate.getDate() + 1);
      if (fromDate.getDay() !== 0 && fromDate.getDay() !== 6) count++;
    }

    return new Intl.DateTimeFormat("en-US").format(fromDate);
  }

  compareDates(docDate, days, closingDate) {
    let updatedDocDate = new Date(docDate);
    updatedDocDate.setDate(updatedDocDate.getDate() + days + 1);
    if (new Date(closingDate).getTime() < updatedDocDate.getTime()) {
      return true;
    } else return false;
  }

  resetForm = () => {
    this.setState({
      ...this.state,
      closingDate: "",
      borrowerPaystubs: "",
      les: "",
      creditReport: "",
      bankStatement: "",
      appraisal: "",
      titleCommitment: "",
      voe: "",
      thirdPartyVoe: "",
      selfEmployedVoe: "",
      voi: ""
    });
  };

  render() {
    return (
      <Container>
        <Header as="h1">VA Mortgage Date Calculator</Header>
        <VaComment value={this.state} />
        <Button onClick={this.resetForm}>Clear</Button>
        <Grid celled>
          {fields.map(({ name, days, label, id, text }) => (
            <VaItem
              key={id}
              text={text}
              name={name}
              days={days}
              label={label}
              value={this.state}
              handleChange={this.handleChange}
              addDays={this.addDays}
              addBusinessDays={this.addBusinessDays}
              compareDates={this.compareDates}
            />
          ))}
        </Grid>
      </Container>
    );
  }
}

export default Va;
