import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const CREATECUSTOMERPROFILEENTITYASSIGNMENT_SERVERS = [
	"https://trusthub.twilio.com",
];



export class CreateCustomerProfileEntityAssignmentPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=CustomerProfileSid" })
  customerProfileSid: string;
}


export class CreateCustomerProfileEntityAssignmentCreateCustomerProfileEntityAssignmentRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=ObjectSid;" })
  objectSid: string;
}


export class CreateCustomerProfileEntityAssignmentSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateCustomerProfileEntityAssignmentRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: CreateCustomerProfileEntityAssignmentPathParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateCustomerProfileEntityAssignmentCreateCustomerProfileEntityAssignmentRequest;

  @Metadata()
  security: CreateCustomerProfileEntityAssignmentSecurity;
}


export class CreateCustomerProfileEntityAssignmentResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  trusthubV1CustomerProfileCustomerProfileEntityAssignment?: shared.TrusthubV1CustomerProfileCustomerProfileEntityAssignment;
}
