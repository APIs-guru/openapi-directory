import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Money } from "./money";


// ExternalPaymentDetails
/** 
 * Stores details about an external payment. Contains only non-confidential information.
 * For more information, see 
 * [Take External Payments](https://developer.squareup.com/docs/payments-api/take-payments/external-payments).
**/
export class ExternalPaymentDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=source" })
  source: string;

  @Metadata({ data: "json, name=source_fee_money" })
  sourceFeeMoney?: Money;

  @Metadata({ data: "json, name=source_id" })
  sourceId?: string;

  @Metadata({ data: "json, name=type" })
  type: string;
}
