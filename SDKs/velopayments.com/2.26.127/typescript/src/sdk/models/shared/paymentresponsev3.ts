import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PaymentEventResponseV3 } from "./paymenteventresponsev3";
import { PaymentAuditCurrencyV3Enum } from "./paymentauditcurrencyv3enum";


export enum PaymentResponseV3FundingStatusEnum {
    Funded = "FUNDED",
    Instructed = "INSTRUCTED",
    Unfunded = "UNFUNDED"
}

export enum PaymentResponseV3StatusEnum {
    Accepted = "ACCEPTED",
    AwaitingFunds = "AWAITING_FUNDS",
    Funded = "FUNDED",
    Unfunded = "UNFUNDED",
    BankPaymentRequested = "BANK_PAYMENT_REQUESTED",
    Rejected = "REJECTED",
    AcceptedByRails = "ACCEPTED_BY_RAILS",
    Confirmed = "CONFIRMED",
    Failed = "FAILED",
    Withdrawn = "WITHDRAWN"
}


export class PaymentResponseV3 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountName" })
  accountName?: string;

  @SpeakeasyMetadata({ data: "json, name=accountNumber" })
  accountNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=countryCode" })
  countryCode?: string;

  @SpeakeasyMetadata({ data: "json, name=events", elemType: PaymentEventResponseV3 })
  events: PaymentEventResponseV3[];

  @SpeakeasyMetadata({ data: "json, name=filenameReference" })
  filenameReference?: string;

  @SpeakeasyMetadata({ data: "json, name=fundingStatus" })
  fundingStatus: PaymentResponseV3FundingStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=iban" })
  iban?: string;

  @SpeakeasyMetadata({ data: "json, name=individualIdentificationNumber" })
  individualIdentificationNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=invertedRate" })
  invertedRate?: number;

  @SpeakeasyMetadata({ data: "json, name=payeeId" })
  payeeId: string;

  @SpeakeasyMetadata({ data: "json, name=paymentAmount" })
  paymentAmount: number;

  @SpeakeasyMetadata({ data: "json, name=paymentChannelId" })
  paymentChannelId?: string;

  @SpeakeasyMetadata({ data: "json, name=paymentChannelName" })
  paymentChannelName?: string;

  @SpeakeasyMetadata({ data: "json, name=paymentCurrency" })
  paymentCurrency?: PaymentAuditCurrencyV3Enum;

  @SpeakeasyMetadata({ data: "json, name=paymentId" })
  paymentId: string;

  @SpeakeasyMetadata({ data: "json, name=paymentMemo" })
  paymentMemo?: string;

  @SpeakeasyMetadata({ data: "json, name=payorId" })
  payorId: string;

  @SpeakeasyMetadata({ data: "json, name=payorName" })
  payorName?: string;

  @SpeakeasyMetadata({ data: "json, name=payorPaymentId" })
  payorPaymentId?: string;

  @SpeakeasyMetadata({ data: "json, name=quoteId" })
  quoteId: string;

  @SpeakeasyMetadata({ data: "json, name=railsBatchId" })
  railsBatchId?: string;

  @SpeakeasyMetadata({ data: "json, name=railsId" })
  railsId: string;

  @SpeakeasyMetadata({ data: "json, name=railsPaymentId" })
  railsPaymentId?: string;

  @SpeakeasyMetadata({ data: "json, name=rate" })
  rate?: number;

  @SpeakeasyMetadata({ data: "json, name=rejectionReason" })
  rejectionReason?: string;

  @SpeakeasyMetadata({ data: "json, name=remoteId" })
  remoteId?: string;

  @SpeakeasyMetadata({ data: "json, name=returnCost" })
  returnCost?: number;

  @SpeakeasyMetadata({ data: "json, name=returnReason" })
  returnReason?: string;

  @SpeakeasyMetadata({ data: "json, name=routingNumber" })
  routingNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=sourceAccountId" })
  sourceAccountId: string;

  @SpeakeasyMetadata({ data: "json, name=sourceAccountName" })
  sourceAccountName?: string;

  @SpeakeasyMetadata({ data: "json, name=sourceAmount" })
  sourceAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=sourceCurrency" })
  sourceCurrency?: PaymentAuditCurrencyV3Enum;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: PaymentResponseV3StatusEnum;

  @SpeakeasyMetadata({ data: "json, name=submittedDateTime" })
  submittedDateTime: Date;

  @SpeakeasyMetadata({ data: "json, name=traceNumber" })
  traceNumber?: string;
}
