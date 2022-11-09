import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// RiskEvaluation
/** 
 * Represents fraud risk information for the associated payment.
 * 
 * When you take a payment through Square's Payments API (using the `CreatePayment`
 * endpoint), Square evaluates it and assigns a risk level to the payment. Sellers
 * can use this information to determine the course of action (for example,
 * provide the goods/services or refund the payment).
**/
export class RiskEvaluation extends SpeakeasyBase {
  @Metadata({ data: "json, name=created_at" })
  createdAt?: string;

  @Metadata({ data: "json, name=risk_level" })
  riskLevel?: string;
}
