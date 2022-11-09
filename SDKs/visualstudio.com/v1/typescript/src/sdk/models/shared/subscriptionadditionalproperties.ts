import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { BillingProperties } from "./billingproperties";


export class SubscriptionAdditionalProperties extends SpeakeasyBase {
  @Metadata({ data: "json, name=billingProperties" })
  billingProperties?: BillingProperties;

  @Metadata({ data: "json, name=resourceProviderProperties" })
  resourceProviderProperties?: string;
}
