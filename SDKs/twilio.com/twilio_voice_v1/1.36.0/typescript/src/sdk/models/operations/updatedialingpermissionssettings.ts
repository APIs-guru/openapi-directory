import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const UPDATEDIALINGPERMISSIONSSETTINGS_SERVERS = [
	"https://voice.twilio.com",
];



export class UpdateDialingPermissionsSettingsUpdateDialingPermissionsSettingsRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=DialingPermissionsInheritance;" })
  dialingPermissionsInheritance?: boolean;
}


export class UpdateDialingPermissionsSettingsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class UpdateDialingPermissionsSettingsRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateDialingPermissionsSettingsUpdateDialingPermissionsSettingsRequest;

  @Metadata()
  security: UpdateDialingPermissionsSettingsSecurity;
}


export class UpdateDialingPermissionsSettingsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  voiceV1DialingPermissionsDialingPermissionsSettings?: shared.VoiceV1DialingPermissionsDialingPermissionsSettings;
}
