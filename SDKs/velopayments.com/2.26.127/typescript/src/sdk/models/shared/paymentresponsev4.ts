import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PaymentEventResponse } from "./paymenteventresponse";
import { PaymentAuditCurrencyEnum } from "./paymentauditcurrencyenum";
import { PaymentAuditCurrencyEnum } from "./paymentauditcurrencyenum";

export enum PaymentResponseV4FundingStatusEnum {
    Funded = "FUNDED"
,    Instructed = "INSTRUCTED"
,    Unfunded = "UNFUNDED"
}

export enum PaymentResponseV4StatusEnum {
    Accepted = "ACCEPTED"
,    AwaitingFunds = "AWAITING_FUNDS"
,    Funded = "FUNDED"
,    Unfunded = "UNFUNDED"
,    BankPaymentRequested = "BANK_PAYMENT_REQUESTED"
,    Rejected = "REJECTED"
,    AcceptedByRails = "ACCEPTED_BY_RAILS"
,    Confirmed = "CONFIRMED"
,    Returned = "RETURNED"
,    Withdrawn = "WITHDRAWN"
}


export class PaymentResponseV4 extends SpeakeasyBase {
  @Metadata({ data: "json, name=accountName" })
  accountName?: string;

  @Metadata({ data: "json, name=accountNumber" })
  accountNumber?: string;

  @Metadata({ data: "json, name=countryCode" })
  countryCode?: string;

  @Metadata({ data: "json, name=events", elemType: shared.PaymentEventResponse })
  events: PaymentEventResponse[];

  @Metadata({ data: "json, name=filenameReference" })
  filenameReference?: string;

  @Metadata({ data: "json, name=fundingStatus" })
  fundingStatus: PaymentResponseV4FundingStatusEnum;

  @Metadata({ data: "json, name=iban" })
  iban?: string;

  @Metadata({ data: "json, name=individualIdentificationNumber" })
  individualIdentificationNumber?: string;

  @Metadata({ data: "json, name=invertedRate" })
  invertedRate?: number;

  @Metadata({ data: "json, name=isPaymentCcyBaseCcy" })
  isPaymentCcyBaseCcy?: boolean;

  @Metadata({ data: "json, name=payeeId" })
  payeeId: string;

  @Metadata({ data: "json, name=paymentAmount" })
  paymentAmount: number;

  @Metadata({ data: "json, name=paymentChannelId" })
  paymentChannelId?: string;

  @Metadata({ data: "json, name=paymentChannelName" })
  paymentChannelName?: string;

  @Metadata({ data: "json, name=paymentCurrency" })
  paymentCurrency?: PaymentAuditCurrencyEnum;

  @Metadata({ data: "json, name=paymentId" })
  paymentId: string;

  @Metadata({ data: "json, name=paymentMemo" })
  paymentMemo?: string;

  @Metadata({ data: "json, name=paymentMetadata" })
  paymentMetadata?: string;

  @Metadata({ data: "json, name=paymentTrackingReference" })
  paymentTrackingReference?: string;

  @Metadata({ data: "json, name=payorId" })
  payorId: string;

  @Metadata({ data: "json, name=payorName" })
  payorName?: string;

  @Metadata({ data: "json, name=payorPaymentId" })
  payorPaymentId?: string;

  @Metadata({ data: "json, name=payout" })
  payout?: any;

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

  @Metadata({ data: "json, name=remoteSystemId" })
  remoteSystemId?: string;

  @Metadata({ data: "json, name=remoteSystemPaymentId" })
  remoteSystemPaymentId?: string;

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
  sourceCurrency?: PaymentAuditCurrencyEnum;

  @Metadata({ data: "json, name=status" })
  status: PaymentResponseV4StatusEnum;

  @Metadata({ data: "json, name=submittedDateTime" })
  submittedDateTime: Date;

  @Metadata({ data: "json, name=traceNumber" })
  traceNumber?: string;

  @Metadata({ data: "json, name=transmissionType" })
  transmissionType?: string;

  @Metadata({ data: "json, name=withdrawable" })
  withdrawable?: boolean;

  @Metadata({ data: "json, name=withdrawnReason" })
  withdrawnReason?: string;
}
