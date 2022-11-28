import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const CreateCustomerProfileServerList = [
	"https://trusthub.twilio.com",
] as const;


export class CreateCustomerProfileCreateCustomerProfileRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=Email;" })
  email: string;

  @SpeakeasyMetadata({ data: "form, name=FriendlyName;" })
  friendlyName: string;

  @SpeakeasyMetadata({ data: "form, name=PolicySid;" })
  policySid: string;

  @SpeakeasyMetadata({ data: "form, name=StatusCallback;" })
  statusCallback?: string;
}


export class CreateCustomerProfileSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateCustomerProfileRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateCustomerProfileCreateCustomerProfileRequest;

  @SpeakeasyMetadata()
  security: CreateCustomerProfileSecurity;
}


export class CreateCustomerProfileResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  trusthubV1CustomerProfile?: shared.TrusthubV1CustomerProfile;
}
