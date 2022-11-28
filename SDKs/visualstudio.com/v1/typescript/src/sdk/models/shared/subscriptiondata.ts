import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SubscriptionData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=computeQuota" })
  computeQuota?: number;

  @SpeakeasyMetadata({ data: "json, name=computeUsage" })
  computeUsage?: number;

  @SpeakeasyMetadata({ data: "json, name=subscriptionId" })
  subscriptionId?: string;

  @SpeakeasyMetadata({ data: "json, name=subscriptionState" })
  subscriptionState?: string;
}
