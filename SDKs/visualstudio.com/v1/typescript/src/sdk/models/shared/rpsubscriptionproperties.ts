import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SubscriptionAccountOwner } from "./subscriptionaccountowner";
import { SubscriptionAdditionalProperties } from "./subscriptionadditionalproperties";



export class RpSubscriptionProperties extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountOwner" })
  accountOwner?: SubscriptionAccountOwner;

  @SpeakeasyMetadata({ data: "json, name=additionalProperties" })
  additionalProperties?: SubscriptionAdditionalProperties;

  @SpeakeasyMetadata({ data: "json, name=locationPlacementId" })
  locationPlacementId?: string;

  @SpeakeasyMetadata({ data: "json, name=quotaId" })
  quotaId?: string;

  @SpeakeasyMetadata({ data: "json, name=tenantId" })
  tenantId?: string;
}
