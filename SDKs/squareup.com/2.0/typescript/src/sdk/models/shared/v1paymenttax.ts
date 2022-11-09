import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { V1Money } from "./v1money";
import { Error } from "./error";


// V1PaymentTax
/** 
 * V1PaymentTax
**/
export class V1PaymentTax extends SpeakeasyBase {
  @Metadata({ data: "json, name=applied_money" })
  appliedMoney?: V1Money;

  @Metadata({ data: "json, name=errors", elemType: shared.Error })
  errors?: Error[];

  @Metadata({ data: "json, name=fee_id" })
  feeId?: string;

  @Metadata({ data: "json, name=inclusion_type" })
  inclusionType?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=rate" })
  rate?: string;
}
