import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const CREATECUSTOMERPROFILE_SERVERS = [
	"https://trusthub.twilio.com",
];



export class CreateCustomerProfileCreateCustomerProfileRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=Email;" })
  email: string;

  @Metadata({ data: "form, name=FriendlyName;" })
  friendlyName: string;

  @Metadata({ data: "form, name=PolicySid;" })
  policySid: string;

  @Metadata({ data: "form, name=StatusCallback;" })
  statusCallback?: string;
}


export class CreateCustomerProfileSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateCustomerProfileRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateCustomerProfileCreateCustomerProfileRequest;

  @Metadata()
  security: CreateCustomerProfileSecurity;
}


export class CreateCustomerProfileResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  trusthubV1CustomerProfile?: shared.TrusthubV1CustomerProfile;
}
