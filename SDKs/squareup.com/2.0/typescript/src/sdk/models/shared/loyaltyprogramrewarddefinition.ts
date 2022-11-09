import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Money } from "./money";
import { Money } from "./money";


// LoyaltyProgramRewardDefinition
/** 
 * Provides details about the reward tier discount. DEPRECATED at version 2020-12-16. Discount details
 * are now defined using a catalog pricing rule and other catalog objects. For more information, see
 * [Get discount details for the reward](https://developer.squareup.com/docs/loyalty-api/overview#get-discount-details).
**/
export class LoyaltyProgramRewardDefinition extends SpeakeasyBase {
  @Metadata({ data: "json, name=catalog_object_ids" })
  catalogObjectIds?: string[];

  @Metadata({ data: "json, name=discount_type" })
  discountType: string;

  @Metadata({ data: "json, name=fixed_discount_money" })
  fixedDiscountMoney?: Money;

  @Metadata({ data: "json, name=max_discount_money" })
  maxDiscountMoney?: Money;

  @Metadata({ data: "json, name=percentage_discount" })
  percentageDiscount?: string;

  @Metadata({ data: "json, name=scope" })
  scope: string;
}
