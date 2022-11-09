import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { V1Money } from "./v1money";
import { V1Money } from "./v1money";
import { V1PaymentTax } from "./v1paymenttax";


// V1PaymentSurcharge
/** 
 * V1PaymentSurcharge
**/
export class V1PaymentSurcharge extends SpeakeasyBase {
  @Metadata({ data: "json, name=amount_money" })
  amountMoney?: V1Money;

  @Metadata({ data: "json, name=applied_money" })
  appliedMoney?: V1Money;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=rate" })
  rate?: string;

  @Metadata({ data: "json, name=surcharge_id" })
  surchargeId?: string;

  @Metadata({ data: "json, name=taxable" })
  taxable?: boolean;

  @Metadata({ data: "json, name=taxes", elemType: shared.V1PaymentTax })
  taxes?: V1PaymentTax[];

  @Metadata({ data: "json, name=type" })
  type?: string;
}
