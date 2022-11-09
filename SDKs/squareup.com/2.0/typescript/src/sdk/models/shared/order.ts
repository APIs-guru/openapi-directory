import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { OrderLineItemDiscount } from "./orderlineitemdiscount";
import { OrderFulfillment } from "./orderfulfillment";
import { OrderLineItem } from "./orderlineitem";
import { OrderMoneyAmounts } from "./ordermoneyamounts";
import { OrderPricingOptions } from "./orderpricingoptions";
import { Refund } from "./refund";
import { OrderMoneyAmounts } from "./ordermoneyamounts";
import { OrderReturn } from "./orderreturn";
import { OrderReward } from "./orderreward";
import { OrderRoundingAdjustment } from "./orderroundingadjustment";
import { OrderServiceCharge } from "./orderservicecharge";
import { OrderSource } from "./ordersource";
import { OrderLineItemTax } from "./orderlineitemtax";
import { Tender } from "./tender";
import { Money } from "./money";
import { Money } from "./money";
import { Money } from "./money";
import { Money } from "./money";
import { Money } from "./money";


// Order
/** 
 * Contains all information related to a single order to process with Square,
 * including line items that specify the products to purchase. `Order` objects also
 * include information about any associated tenders, refunds, and returns.
 * 
 * All Connect V2 Transactions have all been converted to Orders including all associated
 * itemization data.
**/
export class Order extends SpeakeasyBase {
  @Metadata({ data: "json, name=closed_at" })
  closedAt?: string;

  @Metadata({ data: "json, name=created_at" })
  createdAt?: string;

  @Metadata({ data: "json, name=customer_id" })
  customerId?: string;

  @Metadata({ data: "json, name=discounts", elemType: shared.OrderLineItemDiscount })
  discounts?: OrderLineItemDiscount[];

  @Metadata({ data: "json, name=fulfillments", elemType: shared.OrderFulfillment })
  fulfillments?: OrderFulfillment[];

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=line_items", elemType: shared.OrderLineItem })
  lineItems?: OrderLineItem[];

  @Metadata({ data: "json, name=location_id" })
  locationId: string;

  @Metadata({ data: "json, name=metadata" })
  metadata?: Map<string, string>;

  @Metadata({ data: "json, name=net_amounts" })
  netAmounts?: OrderMoneyAmounts;

  @Metadata({ data: "json, name=pricing_options" })
  pricingOptions?: OrderPricingOptions;

  @Metadata({ data: "json, name=reference_id" })
  referenceId?: string;

  @Metadata({ data: "json, name=refunds", elemType: shared.Refund })
  refunds?: Refund[];

  @Metadata({ data: "json, name=return_amounts" })
  returnAmounts?: OrderMoneyAmounts;

  @Metadata({ data: "json, name=returns", elemType: shared.OrderReturn })
  returns?: OrderReturn[];

  @Metadata({ data: "json, name=rewards", elemType: shared.OrderReward })
  rewards?: OrderReward[];

  @Metadata({ data: "json, name=rounding_adjustment" })
  roundingAdjustment?: OrderRoundingAdjustment;

  @Metadata({ data: "json, name=service_charges", elemType: shared.OrderServiceCharge })
  serviceCharges?: OrderServiceCharge[];

  @Metadata({ data: "json, name=source" })
  source?: OrderSource;

  @Metadata({ data: "json, name=state" })
  state?: string;

  @Metadata({ data: "json, name=taxes", elemType: shared.OrderLineItemTax })
  taxes?: OrderLineItemTax[];

  @Metadata({ data: "json, name=tenders", elemType: shared.Tender })
  tenders?: Tender[];

  @Metadata({ data: "json, name=total_discount_money" })
  totalDiscountMoney?: Money;

  @Metadata({ data: "json, name=total_money" })
  totalMoney?: Money;

  @Metadata({ data: "json, name=total_service_charge_money" })
  totalServiceChargeMoney?: Money;

  @Metadata({ data: "json, name=total_tax_money" })
  totalTaxMoney?: Money;

  @Metadata({ data: "json, name=total_tip_money" })
  totalTipMoney?: Money;

  @Metadata({ data: "json, name=updated_at" })
  updatedAt?: string;

  @Metadata({ data: "json, name=version" })
  version?: number;
}
