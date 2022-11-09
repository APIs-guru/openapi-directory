import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Money } from "./money";
import { Money } from "./money";


// LoyaltyProgramAccrualRule
/** 
 * Defines an accrual rule, which is how buyers can earn points.
**/
export class LoyaltyProgramAccrualRule extends SpeakeasyBase {
  @Metadata({ data: "json, name=accrual_type" })
  accrualType: string;

  @Metadata({ data: "json, name=catalog_object_id" })
  catalogObjectId?: string;

  @Metadata({ data: "json, name=excluded_category_ids" })
  excludedCategoryIds?: string[];

  @Metadata({ data: "json, name=excluded_item_variation_ids" })
  excludedItemVariationIds?: string[];

  @Metadata({ data: "json, name=points" })
  points?: number;

  @Metadata({ data: "json, name=spend_amount_money" })
  spendAmountMoney?: Money;

  @Metadata({ data: "json, name=visit_minimum_amount_money" })
  visitMinimumAmountMoney?: Money;
}
