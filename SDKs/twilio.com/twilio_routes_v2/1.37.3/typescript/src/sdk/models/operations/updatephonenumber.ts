import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const UpdatePhoneNumberServerList = [
	"https://routes.twilio.com",
] as const;


export class UpdatePhoneNumberPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=PhoneNumber" })
  phoneNumber: string;
}


export class UpdatePhoneNumberUpdatePhoneNumberRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=FriendlyName;" })
  friendlyName?: string;

  @SpeakeasyMetadata({ data: "form, name=VoiceRegion;" })
  voiceRegion?: string;
}


export class UpdatePhoneNumberSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class UpdatePhoneNumberRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: UpdatePhoneNumberPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdatePhoneNumberUpdatePhoneNumberRequest;

  @SpeakeasyMetadata()
  security: UpdatePhoneNumberSecurity;
}


export class UpdatePhoneNumberResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  routesV2PhoneNumber?: shared.RoutesV2PhoneNumber;
}
