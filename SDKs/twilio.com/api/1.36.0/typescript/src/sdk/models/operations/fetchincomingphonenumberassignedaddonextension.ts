import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const FETCHINCOMINGPHONENUMBERASSIGNEDADDONEXTENSION_SERVERS = [
	"https://api.twilio.com",
];



export class FetchIncomingPhoneNumberAssignedAddOnExtensionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" })
  accountSid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=AssignedAddOnSid" })
  assignedAddOnSid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=ResourceSid" })
  resourceSid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;
}


export class FetchIncomingPhoneNumberAssignedAddOnExtensionSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class FetchIncomingPhoneNumberAssignedAddOnExtensionRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: FetchIncomingPhoneNumberAssignedAddOnExtensionPathParams;

  @Metadata()
  security: FetchIncomingPhoneNumberAssignedAddOnExtensionSecurity;
}


export class FetchIncomingPhoneNumberAssignedAddOnExtensionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  apiV2010AccountIncomingPhoneNumberIncomingPhoneNumberAssignedAddOnIncomingPhoneNumberAssignedAddOnExtension?: shared.ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberAssignedAddOnIncomingPhoneNumberAssignedAddOnExtension;
}
