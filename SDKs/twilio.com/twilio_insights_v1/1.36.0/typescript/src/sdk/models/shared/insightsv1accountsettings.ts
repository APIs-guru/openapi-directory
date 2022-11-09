import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class InsightsV1AccountSettings extends SpeakeasyBase {
  @Metadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @Metadata({ data: "json, name=advanced_features" })
  advancedFeatures?: boolean;

  @Metadata({ data: "json, name=url" })
  url?: string;

  @Metadata({ data: "json, name=voice_trace" })
  voiceTrace?: boolean;
}
