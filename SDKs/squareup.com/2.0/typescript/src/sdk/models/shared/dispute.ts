import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Money } from "./money";
import { DisputedPayment } from "./disputedpayment";


// Dispute
/** 
 * Represents a dispute a cardholder initiated with their bank.
**/
export class Dispute extends SpeakeasyBase {
  @Metadata({ data: "json, name=amount_money" })
  amountMoney?: Money;

  @Metadata({ data: "json, name=brand_dispute_id" })
  brandDisputeId?: string;

  @Metadata({ data: "json, name=card_brand" })
  cardBrand?: string;

  @Metadata({ data: "json, name=created_at" })
  createdAt?: string;

  @Metadata({ data: "json, name=dispute_id" })
  disputeId?: string;

  @Metadata({ data: "json, name=disputed_payment" })
  disputedPayment?: DisputedPayment;

  @Metadata({ data: "json, name=due_at" })
  dueAt?: string;

  @Metadata({ data: "json, name=evidence_ids" })
  evidenceIds?: string[];

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=location_id" })
  locationId?: string;

  @Metadata({ data: "json, name=reason" })
  reason?: string;

  @Metadata({ data: "json, name=reported_at" })
  reportedAt?: string;

  @Metadata({ data: "json, name=reported_date" })
  reportedDate?: string;

  @Metadata({ data: "json, name=state" })
  state?: string;

  @Metadata({ data: "json, name=updated_at" })
  updatedAt?: string;

  @Metadata({ data: "json, name=version" })
  version?: number;
}
