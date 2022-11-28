import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const FetchIncomingPhoneNumberAssignedAddOnExtensionServerList = [
	"https://api.twilio.com",
] as const;


export class FetchIncomingPhoneNumberAssignedAddOnExtensionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" })
  accountSid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=AssignedAddOnSid" })
  assignedAddOnSid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ResourceSid" })
  resourceSid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;
}


export class FetchIncomingPhoneNumberAssignedAddOnExtensionSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class FetchIncomingPhoneNumberAssignedAddOnExtensionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: FetchIncomingPhoneNumberAssignedAddOnExtensionPathParams;

  @SpeakeasyMetadata()
  security: FetchIncomingPhoneNumberAssignedAddOnExtensionSecurity;
}


export class FetchIncomingPhoneNumberAssignedAddOnExtensionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  apiV2010AccountIncomingPhoneNumberIncomingPhoneNumberAssignedAddOnIncomingPhoneNumberAssignedAddOnExtension?: shared.ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberAssignedAddOnIncomingPhoneNumberAssignedAddOnExtension;
}
