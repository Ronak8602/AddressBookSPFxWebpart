import "./Addressbook.scss";
import * as React from "react";
import { Component } from "react";
import { ApiProvider, Contact } from "../api provider/api_provider";
import { WebPartContext } from "@microsoft/sp-webpart-base";

class ContactDetails extends Component<
  {
    contact: Contact;
    handleDialog: Function;
    context: WebPartContext;
    setContacts: Function;
  },
  any
> {
  constructor(props: any) {
    super(props);
    this.deleteContact = this.deleteContact.bind(this);
    this.editContact = this.editContact.bind(this);
  }

  editContact(e: any) {
    e.preventDefault();
    this.props.handleDialog!();
  }

  deleteContact() {
    let key: string = this.props.contact.key;
    ApiProvider.deleteContact(this.props.context, key, this.props.setContacts);
  }

  render() {
    const item = this.props.contact;
    return (
      <div className="contactBody">
        <div className="contactDetailCard" id="contactDetailCard">
          <div className="contactDetailsHeading">
            <p className="contactName boldName" id="nameDetail">
              {item.name}
            </p>
            <div className="editDiv" onClick={this.editContact}>
              <img className="editIcon" src="assets/edit1.jpg" alt="edit" />
              <p>EDIT</p>
            </div>
            <div className="deleteDiv" onClick={this.deleteContact}>
              <img
                className="deleteIcon"
                src=".media/delete2.png"
                alt="delete"
              />
              <p>DELETE</p>
            </div>
          </div>
          <div className="row">
            <p className="detailsStyle">Email:</p>
            <p className="detailsStyle" id="emailDetail">
              {item.email}
            </p>
          </div>
          <div className="row">
            <p className="noPaddingMargin detailsStyle">Mobile:</p>
            <p className="noPaddingMargin detailsStyle" id="mobileDetail">
              {item.mobile}
            </p>
          </div>
          <div className="row">
            <p className="noPaddingMargin detailsStyle">Landline:</p>
            <p className="noPaddingMargin detailsStyle" id="landlineDetail">
              {item.landline}
            </p>
          </div>
          <div className="row">
            <p className="detailsStyle">Website:</p>
            <p className="detailsStyle" id="websiteDetail">
              {item.website}
            </p>
          </div>
          <div className="row">
            <p className="detailsStyle">Address:&nbsp;</p>
            <div className="contactAddress">
              <p className="detailsStyle" id="addressDetail1">
                {item.address}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactDetails;
