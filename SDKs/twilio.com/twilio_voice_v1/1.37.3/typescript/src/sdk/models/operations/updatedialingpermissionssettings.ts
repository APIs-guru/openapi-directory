import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const UpdateDialingPermissionsSettingsServerList = [
	"https://voice.twilio.com",
] as const;


export class UpdateDialingPermissionsSettingsUpdateDialingPermissionsSettingsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=DialingPermissionsInheritance;" })
  dialingPermissionsInheritance?: boolean;
}


export class UpdateDialingPermissionsSettingsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class UpdateDialingPermissionsSettingsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateDialingPermissionsSettingsUpdateDialingPermissionsSettingsRequest;

  @SpeakeasyMetadata()
  security: UpdateDialingPermissionsSettingsSecurity;
}


export class UpdateDialingPermissionsSettingsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  voiceV1DialingPermissionsDialingPermissionsSettings?: shared.VoiceV1DialingPermissionsDialingPermissionsSettings;
}
