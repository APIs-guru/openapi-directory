import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const UPDATEACCOUNTSETTINGS_SERVERS = [
	"https://insights.twilio.com",
];



export class UpdateAccountSettingsUpdateAccountSettingsRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=AdvancedFeatures;" })
  advancedFeatures?: boolean;

  @Metadata({ data: "form, name=SubaccountSid;" })
  subaccountSid?: string;

  @Metadata({ data: "form, name=VoiceTrace;" })
  voiceTrace?: boolean;
}


export class UpdateAccountSettingsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class UpdateAccountSettingsRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateAccountSettingsUpdateAccountSettingsRequest;

  @Metadata()
  security: UpdateAccountSettingsSecurity;
}


export class UpdateAccountSettingsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  insightsV1AccountSettings?: shared.InsightsV1AccountSettings;
}
