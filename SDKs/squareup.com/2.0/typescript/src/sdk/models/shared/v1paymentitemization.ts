import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { V1Money } from "./v1money";
import { V1PaymentDiscount } from "./v1paymentdiscount";
import { V1Money } from "./v1money";
import { V1PaymentItemDetail } from "./v1paymentitemdetail";
import { V1PaymentModifier } from "./v1paymentmodifier";
import { V1Money } from "./v1money";
import { V1Money } from "./v1money";
import { V1PaymentTax } from "./v1paymenttax";
import { V1Money } from "./v1money";


// V1PaymentItemization
/** 
 * Payment include an` itemizations` field that lists the items purchased,
 * along with associated fees, modifiers, and discounts. Each itemization has an
 * `itemization_type` field that indicates which of the following the itemization
 * represents:
 * 
 * <ul>
 * <li>An item variation from the merchant's item library</li>
 * <li>A custom monetary amount</li>
 * <li>
 * An action performed on a Square gift card, such as activating or
 * reloading it.
 * </li>
 * </ul>
 * 
 * *Note**: itemization information included in a `Payment` object reflects
 * details collected **at the time of the payment**. Details such as the name or
 * price of items might have changed since the payment was processed.
**/
export class V1PaymentItemization extends SpeakeasyBase {
  @Metadata({ data: "json, name=discount_money" })
  discountMoney?: V1Money;

  @Metadata({ data: "json, name=discounts", elemType: shared.V1PaymentDiscount })
  discounts?: V1PaymentDiscount[];

  @Metadata({ data: "json, name=gross_sales_money" })
  grossSalesMoney?: V1Money;

  @Metadata({ data: "json, name=item_detail" })
  itemDetail?: V1PaymentItemDetail;

  @Metadata({ data: "json, name=item_variation_name" })
  itemVariationName?: string;

  @Metadata({ data: "json, name=itemization_type" })
  itemizationType?: string;

  @Metadata({ data: "json, name=modifiers", elemType: shared.V1PaymentModifier })
  modifiers?: V1PaymentModifier[];

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=net_sales_money" })
  netSalesMoney?: V1Money;

  @Metadata({ data: "json, name=notes" })
  notes?: string;

  @Metadata({ data: "json, name=quantity" })
  quantity?: number;

  @Metadata({ data: "json, name=single_quantity_money" })
  singleQuantityMoney?: V1Money;

  @Metadata({ data: "json, name=taxes", elemType: shared.V1PaymentTax })
  taxes?: V1PaymentTax[];

  @Metadata({ data: "json, name=total_money" })
  totalMoney?: V1Money;
}
