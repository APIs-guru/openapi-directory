import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const DeleteIncomingPhoneNumberAssignedAddOnServerList = [
	"https://api.twilio.com",
] as const;


export class DeleteIncomingPhoneNumberAssignedAddOnPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" })
  accountSid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ResourceSid" })
  resourceSid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;
}


export class DeleteIncomingPhoneNumberAssignedAddOnSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class DeleteIncomingPhoneNumberAssignedAddOnRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: DeleteIncomingPhoneNumberAssignedAddOnPathParams;

  @SpeakeasyMetadata()
  security: DeleteIncomingPhoneNumberAssignedAddOnSecurity;
}


export class DeleteIncomingPhoneNumberAssignedAddOnResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
