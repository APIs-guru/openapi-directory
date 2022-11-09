import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Money } from "./money";


// CatalogDiscount
/** 
 * A discount applicable to items.
**/
export class CatalogDiscount extends SpeakeasyBase {
  @Metadata({ data: "json, name=amount_money" })
  amountMoney?: Money;

  @Metadata({ data: "json, name=discount_type" })
  discountType?: string;

  @Metadata({ data: "json, name=label_color" })
  labelColor?: string;

  @Metadata({ data: "json, name=modify_tax_basis" })
  modifyTaxBasis?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=percentage" })
  percentage?: string;

  @Metadata({ data: "json, name=pin_required" })
  pinRequired?: boolean;
}
