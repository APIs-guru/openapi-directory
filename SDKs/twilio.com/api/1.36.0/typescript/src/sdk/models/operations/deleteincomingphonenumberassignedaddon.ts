import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const DELETEINCOMINGPHONENUMBERASSIGNEDADDON_SERVERS = [
	"https://api.twilio.com",
];



export class DeleteIncomingPhoneNumberAssignedAddOnPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" })
  accountSid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=ResourceSid" })
  resourceSid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;
}


export class DeleteIncomingPhoneNumberAssignedAddOnSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class DeleteIncomingPhoneNumberAssignedAddOnRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: DeleteIncomingPhoneNumberAssignedAddOnPathParams;

  @Metadata()
  security: DeleteIncomingPhoneNumberAssignedAddOnSecurity;
}


export class DeleteIncomingPhoneNumberAssignedAddOnResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
