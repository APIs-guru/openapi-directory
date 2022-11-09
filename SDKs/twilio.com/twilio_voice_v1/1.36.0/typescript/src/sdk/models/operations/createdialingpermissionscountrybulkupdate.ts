import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const CREATEDIALINGPERMISSIONSCOUNTRYBULKUPDATE_SERVERS = [
	"https://voice.twilio.com",
];



export class CreateDialingPermissionsCountryBulkUpdateCreateDialingPermissionsCountryBulkUpdateRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=UpdateRequest;" })
  updateRequest: string;
}


export class CreateDialingPermissionsCountryBulkUpdateSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateDialingPermissionsCountryBulkUpdateRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateDialingPermissionsCountryBulkUpdateCreateDialingPermissionsCountryBulkUpdateRequest;

  @Metadata()
  security: CreateDialingPermissionsCountryBulkUpdateSecurity;
}


export class CreateDialingPermissionsCountryBulkUpdateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  voiceV1DialingPermissionsDialingPermissionsCountryBulkUpdate?: shared.VoiceV1DialingPermissionsDialingPermissionsCountryBulkUpdate;
}
