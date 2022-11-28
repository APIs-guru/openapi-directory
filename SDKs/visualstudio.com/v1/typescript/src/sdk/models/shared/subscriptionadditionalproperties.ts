import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BillingProperties } from "./billingproperties";



export class SubscriptionAdditionalProperties extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=billingProperties" })
  billingProperties?: BillingProperties;

  @SpeakeasyMetadata({ data: "json, name=resourceProviderProperties" })
  resourceProviderProperties?: string;
}
