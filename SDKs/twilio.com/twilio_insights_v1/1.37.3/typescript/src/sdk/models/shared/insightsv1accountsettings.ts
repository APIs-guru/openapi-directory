import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class InsightsV1AccountSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @SpeakeasyMetadata({ data: "json, name=advanced_features" })
  advancedFeatures?: boolean;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;

  @SpeakeasyMetadata({ data: "json, name=voice_trace" })
  voiceTrace?: boolean;
}
