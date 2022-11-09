import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Money } from "./money";
import { Money } from "./money";
import { OrderLineItemAppliedTax } from "./orderlineitemappliedtax";
import { Money } from "./money";
import { Money } from "./money";


// OrderReturnServiceCharge
/** 
 * Represents the service charge applied to the original order.
**/
export class OrderReturnServiceCharge extends SpeakeasyBase {
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

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=percentage" })
  percentage?: string;

  @Metadata({ data: "json, name=source_service_charge_uid" })
  sourceServiceChargeUid?: string;

  @Metadata({ data: "json, name=taxable" })
  taxable?: boolean;

  @Metadata({ data: "json, name=total_money" })
  totalMoney?: Money;

  @Metadata({ data: "json, name=total_tax_money" })
  totalTaxMoney?: Money;

  @Metadata({ data: "json, name=uid" })
  uid?: string;
}
