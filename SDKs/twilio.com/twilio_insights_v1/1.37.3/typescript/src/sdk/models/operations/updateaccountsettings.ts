import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const UpdateAccountSettingsServerList = [
	"https://insights.twilio.com",
] as const;


export class UpdateAccountSettingsUpdateAccountSettingsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=AdvancedFeatures;" })
  advancedFeatures?: boolean;

  @SpeakeasyMetadata({ data: "form, name=SubaccountSid;" })
  subaccountSid?: string;

  @SpeakeasyMetadata({ data: "form, name=VoiceTrace;" })
  voiceTrace?: boolean;
}


export class UpdateAccountSettingsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class UpdateAccountSettingsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateAccountSettingsUpdateAccountSettingsRequest;

  @SpeakeasyMetadata()
  security: UpdateAccountSettingsSecurity;
}


export class UpdateAccountSettingsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  insightsV1AccountSettings?: shared.InsightsV1AccountSettings;
}
