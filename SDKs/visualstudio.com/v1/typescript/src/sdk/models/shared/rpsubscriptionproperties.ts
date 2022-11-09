import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { SubscriptionAccountOwner } from "./subscriptionaccountowner";
import { SubscriptionAdditionalProperties } from "./subscriptionadditionalproperties";
import { StringStringKeyValuePair } from "./stringstringkeyvaluepair";
import { StringStringKeyValuePair } from "./stringstringkeyvaluepair";


export class RpSubscriptionProperties extends SpeakeasyBase {
  @Metadata({ data: "json, name=accountOwner" })
  accountOwner?: SubscriptionAccountOwner;

  @Metadata({ data: "json, name=additionalProperties" })
  additionalProperties?: SubscriptionAdditionalProperties;

  @Metadata({ data: "json, name=locationPlacementId" })
  locationPlacementId?: string;

  @Metadata({ data: "json, name=managedByTenants", elemType: shared.StringStringKeyValuePair })
  managedByTenants?: StringStringKeyValuePair[];

  @Metadata({ data: "json, name=quotaId" })
  quotaId?: string;

  @Metadata({ data: "json, name=registeredFeatures", elemType: shared.StringStringKeyValuePair })
  registeredFeatures?: StringStringKeyValuePair[];

  @Metadata({ data: "json, name=tenantId" })
  tenantId?: string;
}
