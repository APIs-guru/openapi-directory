import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const CreateIncomingPhoneNumberAssignedAddOnServerList = [
	"https://api.twilio.com",
] as const;


export class CreateIncomingPhoneNumberAssignedAddOnPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" })
  accountSid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ResourceSid" })
  resourceSid: string;
}


export class CreateIncomingPhoneNumberAssignedAddOnCreateIncomingPhoneNumberAssignedAddOnRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=InstalledAddOnSid;" })
  installedAddOnSid: string;
}


export class CreateIncomingPhoneNumberAssignedAddOnSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateIncomingPhoneNumberAssignedAddOnRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: CreateIncomingPhoneNumberAssignedAddOnPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateIncomingPhoneNumberAssignedAddOnCreateIncomingPhoneNumberAssignedAddOnRequest;

  @SpeakeasyMetadata()
  security: CreateIncomingPhoneNumberAssignedAddOnSecurity;
}


export class CreateIncomingPhoneNumberAssignedAddOnResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  apiV2010AccountIncomingPhoneNumberIncomingPhoneNumberAssignedAddOn?: shared.ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberAssignedAddOn;
}
