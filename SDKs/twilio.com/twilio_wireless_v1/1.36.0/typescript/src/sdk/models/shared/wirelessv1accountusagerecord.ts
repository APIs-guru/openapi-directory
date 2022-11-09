import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class WirelessV1AccountUsageRecord extends SpeakeasyBase {
  @Metadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @Metadata({ data: "json, name=commands" })
  commands?: any;

  @Metadata({ data: "json, name=data" })
  data?: any;

  @Metadata({ data: "json, name=period" })
  period?: any;
}
