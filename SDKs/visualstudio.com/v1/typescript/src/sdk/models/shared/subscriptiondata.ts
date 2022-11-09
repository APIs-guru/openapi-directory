import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SubscriptionData extends SpeakeasyBase {
  @Metadata({ data: "json, name=computeQuota" })
  computeQuota?: number;

  @Metadata({ data: "json, name=computeUsage" })
  computeUsage?: number;

  @Metadata({ data: "json, name=subscriptionId" })
  subscriptionId?: string;

  @Metadata({ data: "json, name=subscriptionState" })
  subscriptionState?: string;
}
