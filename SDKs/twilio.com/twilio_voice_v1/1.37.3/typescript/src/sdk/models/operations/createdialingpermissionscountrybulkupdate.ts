import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const CreateDialingPermissionsCountryBulkUpdateServerList = [
	"https://voice.twilio.com",
] as const;


export class CreateDialingPermissionsCountryBulkUpdateCreateDialingPermissionsCountryBulkUpdateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=UpdateRequest;" })
  updateRequest: string;
}


export class CreateDialingPermissionsCountryBulkUpdateSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateDialingPermissionsCountryBulkUpdateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateDialingPermissionsCountryBulkUpdateCreateDialingPermissionsCountryBulkUpdateRequest;

  @SpeakeasyMetadata()
  security: CreateDialingPermissionsCountryBulkUpdateSecurity;
}


export class CreateDialingPermissionsCountryBulkUpdateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  voiceV1DialingPermissionsDialingPermissionsCountryBulkUpdate?: shared.VoiceV1DialingPermissionsDialingPermissionsCountryBulkUpdate;
}
