import { SpeakeasyBase } from "../../../internal/utils";
import { SubscriptionAccountOwner } from "./subscriptionaccountowner";
import { SubscriptionAdditionalProperties } from "./subscriptionadditionalproperties";
export declare class RpSubscriptionProperties extends SpeakeasyBase {
    accountOwner?: SubscriptionAccountOwner;
    additionalProperties?: SubscriptionAdditionalProperties;
    locationPlacementId?: string;
    quotaId?: string;
    tenantId?: string;
}
