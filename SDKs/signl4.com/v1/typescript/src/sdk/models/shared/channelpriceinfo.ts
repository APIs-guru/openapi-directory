import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ChannelPriceInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=smsPerMessage" })
  smsPerMessage?: number;

  @Metadata({ data: "json, name=voicePerMinute" })
  voicePerMinute?: number;
}
