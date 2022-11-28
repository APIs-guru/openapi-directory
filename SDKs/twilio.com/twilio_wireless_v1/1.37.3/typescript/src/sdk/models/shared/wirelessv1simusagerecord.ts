import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class WirelessV1SimUsageRecord extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @SpeakeasyMetadata({ data: "json, name=commands" })
  commands?: any;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: any;

  @SpeakeasyMetadata({ data: "json, name=period" })
  period?: any;

  @SpeakeasyMetadata({ data: "json, name=sim_sid" })
  simSid?: string;
}
