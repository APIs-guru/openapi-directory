import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class WirelessV1AccountUsageRecord extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @SpeakeasyMetadata({ data: "json, name=commands" })
  commands?: any;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: any;

  @SpeakeasyMetadata({ data: "json, name=period" })
  period?: any;
}
