import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const CreateCustomerProfileEntityAssignmentServerList = [
	"https://trusthub.twilio.com",
] as const;


export class CreateCustomerProfileEntityAssignmentPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=CustomerProfileSid" })
  customerProfileSid: string;
}


export class CreateCustomerProfileEntityAssignmentCreateCustomerProfileEntityAssignmentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=ObjectSid;" })
  objectSid: string;
}


export class CreateCustomerProfileEntityAssignmentSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateCustomerProfileEntityAssignmentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: CreateCustomerProfileEntityAssignmentPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateCustomerProfileEntityAssignmentCreateCustomerProfileEntityAssignmentRequest;

  @SpeakeasyMetadata()
  security: CreateCustomerProfileEntityAssignmentSecurity;
}


export class CreateCustomerProfileEntityAssignmentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  trusthubV1CustomerProfileCustomerProfileEntityAssignment?: shared.TrusthubV1CustomerProfileCustomerProfileEntityAssignment;
}
