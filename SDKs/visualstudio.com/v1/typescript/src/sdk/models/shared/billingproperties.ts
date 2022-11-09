import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class BillingProperties extends SpeakeasyBase {
  @Metadata({ data: "json, name=billingType" })
  billingType?: string;

  @Metadata({ data: "json, name=channelType" })
  channelType?: string;

  @Metadata({ data: "json, name=paymentType" })
  paymentType?: string;

  @Metadata({ data: "json, name=tier" })
  tier?: string;

  @Metadata({ data: "json, name=workloadType" })
  workloadType?: string;
}
