import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AdditionalRecipient } from "./additionalrecipient";
import { Money } from "./money";
import { TenderCardDetails } from "./tendercarddetails";
import { TenderCashDetails } from "./tendercashdetails";
import { Money } from "./money";
import { Money } from "./money";


// Tender
/** 
 * Represents a tender (i.e., a method of payment) used in a Square transaction.
**/
export class Tender extends SpeakeasyBase {
  @Metadata({ data: "json, name=additional_recipients", elemType: shared.AdditionalRecipient })
  additionalRecipients?: AdditionalRecipient[];

  @Metadata({ data: "json, name=amount_money" })
  amountMoney?: Money;

  @Metadata({ data: "json, name=card_details" })
  cardDetails?: TenderCardDetails;

  @Metadata({ data: "json, name=cash_details" })
  cashDetails?: TenderCashDetails;

  @Metadata({ data: "json, name=created_at" })
  createdAt?: string;

  @Metadata({ data: "json, name=customer_id" })
  customerId?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=location_id" })
  locationId?: string;

  @Metadata({ data: "json, name=note" })
  note?: string;

  @Metadata({ data: "json, name=payment_id" })
  paymentId?: string;

  @Metadata({ data: "json, name=processing_fee_money" })
  processingFeeMoney?: Money;

  @Metadata({ data: "json, name=tip_money" })
  tipMoney?: Money;

  @Metadata({ data: "json, name=transaction_id" })
  transactionId?: string;

  @Metadata({ data: "json, name=type" })
  type: string;
}
