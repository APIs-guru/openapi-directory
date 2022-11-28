import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const FetchDialingPermissionsSettingsServerList = [
	"https://voice.twilio.com",
] as const;


export class FetchDialingPermissionsSettingsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class FetchDialingPermissionsSettingsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  security: FetchDialingPermissionsSettingsSecurity;
}


export class FetchDialingPermissionsSettingsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  voiceV1DialingPermissionsDialingPermissionsSettings?: shared.VoiceV1DialingPermissionsDialingPermissionsSettings;
}
