import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const CreatePhoneNumberServerList = [
	"https://trunking.twilio.com",
] as const;


export class CreatePhoneNumberPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=TrunkSid" })
  trunkSid: string;
}


export class CreatePhoneNumberCreatePhoneNumberRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=PhoneNumberSid;" })
  phoneNumberSid: string;
}


export class CreatePhoneNumberSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreatePhoneNumberRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: CreatePhoneNumberPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreatePhoneNumberCreatePhoneNumberRequest;

  @SpeakeasyMetadata()
  security: CreatePhoneNumberSecurity;
}


export class CreatePhoneNumberResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  trunkingV1TrunkPhoneNumber?: shared.TrunkingV1TrunkPhoneNumber;
}
