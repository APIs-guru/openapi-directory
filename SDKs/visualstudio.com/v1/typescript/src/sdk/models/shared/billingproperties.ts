import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class BillingProperties extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=billingType" })
  billingType?: string;

  @SpeakeasyMetadata({ data: "json, name=channelType" })
  channelType?: string;

  @SpeakeasyMetadata({ data: "json, name=paymentType" })
  paymentType?: string;

  @SpeakeasyMetadata({ data: "json, name=tier" })
  tier?: string;

  @SpeakeasyMetadata({ data: "json, name=workloadType" })
  workloadType?: string;
}
