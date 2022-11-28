import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ChannelPriceInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=smsPerMessage" })
  smsPerMessage?: number;

  @SpeakeasyMetadata({ data: "json, name=voicePerMinute" })
  voicePerMinute?: number;
}
