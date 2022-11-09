import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Money } from "./money";
import { Money } from "./money";


// OrderReturnLineItemModifier
/** 
 * A line item modifier being returned.
**/
export class OrderReturnLineItemModifier extends SpeakeasyBase {
  @Metadata({ data: "json, name=base_price_money" })
  basePriceMoney?: Money;

  @Metadata({ data: "json, name=catalog_object_id" })
  catalogObjectId?: string;

  @Metadata({ data: "json, name=catalog_version" })
  catalogVersion?: number;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=source_modifier_uid" })
  sourceModifierUid?: string;

  @Metadata({ data: "json, name=total_price_money" })
  totalPriceMoney?: Money;

  @Metadata({ data: "json, name=uid" })
  uid?: string;
}
