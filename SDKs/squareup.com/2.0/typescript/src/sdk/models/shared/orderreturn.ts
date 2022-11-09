import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { OrderMoneyAmounts } from "./ordermoneyamounts";
import { OrderReturnDiscount } from "./orderreturndiscount";
import { OrderReturnLineItem } from "./orderreturnlineitem";
import { OrderReturnServiceCharge } from "./orderreturnservicecharge";
import { OrderReturnTax } from "./orderreturntax";
import { OrderRoundingAdjustment } from "./orderroundingadjustment";


// OrderReturn
/** 
 * The set of line items, service charges, taxes, discounts, tips, and other items being returned in an order.
**/
export class OrderReturn extends SpeakeasyBase {
  @Metadata({ data: "json, name=return_amounts" })
  returnAmounts?: OrderMoneyAmounts;

  @Metadata({ data: "json, name=return_discounts", elemType: shared.OrderReturnDiscount })
  returnDiscounts?: OrderReturnDiscount[];

  @Metadata({ data: "json, name=return_line_items", elemType: shared.OrderReturnLineItem })
  returnLineItems?: OrderReturnLineItem[];

  @Metadata({ data: "json, name=return_service_charges", elemType: shared.OrderReturnServiceCharge })
  returnServiceCharges?: OrderReturnServiceCharge[];

  @Metadata({ data: "json, name=return_taxes", elemType: shared.OrderReturnTax })
  returnTaxes?: OrderReturnTax[];

  @Metadata({ data: "json, name=rounding_adjustment" })
  roundingAdjustment?: OrderRoundingAdjustment;

  @Metadata({ data: "json, name=source_order_id" })
  sourceOrderId?: string;

  @Metadata({ data: "json, name=uid" })
  uid?: string;
}
