import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Money } from "./money";
import { Money } from "./money";
import { OrderLineItemAppliedTax } from "./orderlineitemappliedtax";
import { Money } from "./money";
import { Money } from "./money";


// OrderServiceCharge
/** 
 * Represents a service charge applied to an order.
**/
export class OrderServiceCharge extends SpeakeasyBase {
  @Metadata({ data: "json, name=amount_money" })
  amountMoney?: Money;

  @Metadata({ data: "json, name=applied_money" })
  appliedMoney?: Money;

  @Metadata({ data: "json, name=applied_taxes", elemType: shared.OrderLineItemAppliedTax })
  appliedTaxes?: OrderLineItemAppliedTax[];

  @Metadata({ data: "json, name=calculation_phase" })
  calculationPhase?: string;

  @Metadata({ data: "json, name=catalog_object_id" })
  catalogObjectId?: string;

  @Metadata({ data: "json, name=catalog_version" })
  catalogVersion?: number;

  @Metadata({ data: "json, name=metadata" })
  metadata?: Map<string, string>;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=percentage" })
  percentage?: string;

  @Metadata({ data: "json, name=taxable" })
  taxable?: boolean;

  @Metadata({ data: "json, name=total_money" })
  totalMoney?: Money;

  @Metadata({ data: "json, name=total_tax_money" })
  totalTaxMoney?: Money;

  @Metadata({ data: "json, name=type" })
  type?: string;

  @Metadata({ data: "json, name=uid" })
  uid?: string;
}
