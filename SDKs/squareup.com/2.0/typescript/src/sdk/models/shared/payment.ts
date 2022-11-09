import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Money } from "./money";
import { Money } from "./money";
import { Money } from "./money";
import { BankAccountPaymentDetails } from "./bankaccountpaymentdetails";
import { Address } from "./address";
import { CardPaymentDetails } from "./cardpaymentdetails";
import { CashPaymentDetails } from "./cashpaymentdetails";
import { ExternalPaymentDetails } from "./externalpaymentdetails";
import { ProcessingFee } from "./processingfee";
import { Money } from "./money";
import { RiskEvaluation } from "./riskevaluation";
import { Address } from "./address";
import { Money } from "./money";
import { Money } from "./money";
import { DigitalWalletDetails } from "./digitalwalletdetails";


// Payment
/** 
 * Represents a payment processed by the Square API.
**/
export class Payment extends SpeakeasyBase {
  @Metadata({ data: "json, name=amount_money" })
  amountMoney?: Money;

  @Metadata({ data: "json, name=app_fee_money" })
  appFeeMoney?: Money;

  @Metadata({ data: "json, name=approved_money" })
  approvedMoney?: Money;

  @Metadata({ data: "json, name=bank_account_details" })
  bankAccountDetails?: BankAccountPaymentDetails;

  @Metadata({ data: "json, name=billing_address" })
  billingAddress?: Address;

  @Metadata({ data: "json, name=buyer_email_address" })
  buyerEmailAddress?: string;

  @Metadata({ data: "json, name=capabilities" })
  capabilities?: string[];

  @Metadata({ data: "json, name=card_details" })
  cardDetails?: CardPaymentDetails;

  @Metadata({ data: "json, name=cash_details" })
  cashDetails?: CashPaymentDetails;

  @Metadata({ data: "json, name=created_at" })
  createdAt?: string;

  @Metadata({ data: "json, name=customer_id" })
  customerId?: string;

  @Metadata({ data: "json, name=delay_action" })
  delayAction?: string;

  @Metadata({ data: "json, name=delay_duration" })
  delayDuration?: string;

  @Metadata({ data: "json, name=delayed_until" })
  delayedUntil?: string;

  @Metadata({ data: "json, name=employee_id" })
  employeeId?: string;

  @Metadata({ data: "json, name=external_details" })
  externalDetails?: ExternalPaymentDetails;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=location_id" })
  locationId?: string;

  @Metadata({ data: "json, name=note" })
  note?: string;

  @Metadata({ data: "json, name=order_id" })
  orderId?: string;

  @Metadata({ data: "json, name=processing_fee", elemType: shared.ProcessingFee })
  processingFee?: ProcessingFee[];

  @Metadata({ data: "json, name=receipt_number" })
  receiptNumber?: string;

  @Metadata({ data: "json, name=receipt_url" })
  receiptUrl?: string;

  @Metadata({ data: "json, name=reference_id" })
  referenceId?: string;

  @Metadata({ data: "json, name=refund_ids" })
  refundIds?: string[];

  @Metadata({ data: "json, name=refunded_money" })
  refundedMoney?: Money;

  @Metadata({ data: "json, name=risk_evaluation" })
  riskEvaluation?: RiskEvaluation;

  @Metadata({ data: "json, name=shipping_address" })
  shippingAddress?: Address;

  @Metadata({ data: "json, name=source_type" })
  sourceType?: string;

  @Metadata({ data: "json, name=statement_description_identifier" })
  statementDescriptionIdentifier?: string;

  @Metadata({ data: "json, name=status" })
  status?: string;

  @Metadata({ data: "json, name=tip_money" })
  tipMoney?: Money;

  @Metadata({ data: "json, name=total_money" })
  totalMoney?: Money;

  @Metadata({ data: "json, name=updated_at" })
  updatedAt?: string;

  @Metadata({ data: "json, name=version_token" })
  versionToken?: string;

  @Metadata({ data: "json, name=wallet_details" })
  walletDetails?: DigitalWalletDetails;
}
