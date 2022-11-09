import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PaymentEventResponseV3 } from "./paymenteventresponsev3";
import { PaymentAuditCurrencyV3Enum } from "./paymentauditcurrencyv3enum";
import { PaymentAuditCurrencyV3Enum } from "./paymentauditcurrencyv3enum";

export enum PaymentResponseV3FundingStatusEnum {
    Funded = "FUNDED"
,    Instructed = "INSTRUCTED"
,    Unfunded = "UNFUNDED"
}

export enum PaymentResponseV3StatusEnum {
    Accepted = "ACCEPTED"
,    AwaitingFunds = "AWAITING_FUNDS"
,    Funded = "FUNDED"
,    Unfunded = "UNFUNDED"
,    BankPaymentRequested = "BANK_PAYMENT_REQUESTED"
,    Rejected = "REJECTED"
,    AcceptedByRails = "ACCEPTED_BY_RAILS"
,    Confirmed = "CONFIRMED"
,    Failed = "FAILED"
,    Withdrawn = "WITHDRAWN"
}


export class PaymentResponseV3 extends SpeakeasyBase {
  @Metadata({ data: "json, name=accountName" })
  accountName?: string;

  @Metadata({ data: "json, name=accountNumber" })
  accountNumber?: string;

  @Metadata({ data: "json, name=countryCode" })
  countryCode?: string;

  @Metadata({ data: "json, name=events", elemType: shared.PaymentEventResponseV3 })
  events: PaymentEventResponseV3[];

  @Metadata({ data: "json, name=filenameReference" })
  filenameReference?: string;

  @Metadata({ data: "json, name=fundingStatus" })
  fundingStatus: PaymentResponseV3FundingStatusEnum;

  @Metadata({ data: "json, name=iban" })
  iban?: string;

  @Metadata({ data: "json, name=individualIdentificationNumber" })
  individualIdentificationNumber?: string;

  @Metadata({ data: "json, name=invertedRate" })
  invertedRate?: number;

  @Metadata({ data: "json, name=payeeId" })
  payeeId: string;

  @Metadata({ data: "json, name=paymentAmount" })
  paymentAmount: number;

  @Metadata({ data: "json, name=paymentChannelId" })
  paymentChannelId?: string;

  @Metadata({ data: "json, name=paymentChannelName" })
  paymentChannelName?: string;

  @Metadata({ data: "json, name=paymentCurrency" })
  paymentCurrency?: PaymentAuditCurrencyV3Enum;

  @Metadata({ data: "json, name=paymentId" })
  paymentId: string;

  @Metadata({ data: "json, name=paymentMemo" })
  paymentMemo?: string;

  @Metadata({ data: "json, name=payorId" })
  payorId: string;

  @Metadata({ data: "json, name=payorName" })
  payorName?: string;

  @Metadata({ data: "json, name=payorPaymentId" })
  payorPaymentId?: string;

  @Metadata({ data: "json, name=quoteId" })
  quoteId: string;

  @Metadata({ data: "json, name=railsBatchId" })
  railsBatchId?: string;

  @Metadata({ data: "json, name=railsId" })
  railsId: string;

  @Metadata({ data: "json, name=railsPaymentId" })
  railsPaymentId?: string;

  @Metadata({ data: "json, name=rate" })
  rate?: number;

  @Metadata({ data: "json, name=rejectionReason" })
  rejectionReason?: string;

  @Metadata({ data: "json, name=remoteId" })
  remoteId?: string;

  @Metadata({ data: "json, name=returnCost" })
  returnCost?: number;

  @Metadata({ data: "json, name=returnReason" })
  returnReason?: string;

  @Metadata({ data: "json, name=routingNumber" })
  routingNumber?: string;

  @Metadata({ data: "json, name=sourceAccountId" })
  sourceAccountId: string;

  @Metadata({ data: "json, name=sourceAccountName" })
  sourceAccountName?: string;

  @Metadata({ data: "json, name=sourceAmount" })
  sourceAmount?: number;

  @Metadata({ data: "json, name=sourceCurrency" })
  sourceCurrency?: PaymentAuditCurrencyV3Enum;

  @Metadata({ data: "json, name=status" })
  status: PaymentResponseV3StatusEnum;

  @Metadata({ data: "json, name=submittedDateTime" })
  submittedDateTime: Date;

  @Metadata({ data: "json, name=traceNumber" })
  traceNumber?: string;
}
