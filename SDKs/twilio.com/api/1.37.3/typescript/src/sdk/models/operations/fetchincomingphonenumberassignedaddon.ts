import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const FetchIncomingPhoneNumberAssignedAddOnServerList = [
	"https://api.twilio.com",
] as const;


export class FetchIncomingPhoneNumberAssignedAddOnPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" })
  accountSid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ResourceSid" })
  resourceSid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;
}


export class FetchIncomingPhoneNumberAssignedAddOnSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class FetchIncomingPhoneNumberAssignedAddOnRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: FetchIncomingPhoneNumberAssignedAddOnPathParams;

  @SpeakeasyMetadata()
  security: FetchIncomingPhoneNumberAssignedAddOnSecurity;
}


export class FetchIncomingPhoneNumberAssignedAddOnResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  apiV2010AccountIncomingPhoneNumberIncomingPhoneNumberAssignedAddOn?: shared.ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberAssignedAddOn;
}
