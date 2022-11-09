import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AdditionalRecipient } from "./additionalrecipient";
import { Money } from "./money";
import { Money } from "./money";


// Refund
/** 
 * Represents a refund processed for a Square transaction.
**/
export class Refund extends SpeakeasyBase {
  @Metadata({ data: "json, name=additional_recipients", elemType: shared.AdditionalRecipient })
  additionalRecipients?: AdditionalRecipient[];

  @Metadata({ data: "json, name=amount_money" })
  amountMoney: Money;

  @Metadata({ data: "json, name=created_at" })
  createdAt?: string;

  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=location_id" })
  locationId: string;

  @Metadata({ data: "json, name=processing_fee_money" })
  processingFeeMoney?: Money;

  @Metadata({ data: "json, name=reason" })
  reason: string;

  @Metadata({ data: "json, name=status" })
  status: string;

  @Metadata({ data: "json, name=tender_id" })
  tenderId: string;

  @Metadata({ data: "json, name=transaction_id" })
  transactionId: string;
}
