import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PaymentEventResponse } from "./paymenteventresponse";
import { PaymentAuditCurrencyEnum } from "./paymentauditcurrencyenum";


export enum PaymentResponseV4FundingStatusEnum {
    Funded = "FUNDED",
    Instructed = "INSTRUCTED",
    Unfunded = "UNFUNDED"
}

export enum PaymentResponseV4StatusEnum {
    Accepted = "ACCEPTED",
    AwaitingFunds = "AWAITING_FUNDS",
    Funded = "FUNDED",
    Unfunded = "UNFUNDED",
    BankPaymentRequested = "BANK_PAYMENT_REQUESTED",
    Rejected = "REJECTED",
    AcceptedByRails = "ACCEPTED_BY_RAILS",
    Confirmed = "CONFIRMED",
    Returned = "RETURNED",
    Withdrawn = "WITHDRAWN"
}


export class PaymentResponseV4 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountName" })
  accountName?: string;

  @SpeakeasyMetadata({ data: "json, name=accountNumber" })
  accountNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=countryCode" })
  countryCode?: string;

  @SpeakeasyMetadata({ data: "json, name=events", elemType: PaymentEventResponse })
  events: PaymentEventResponse[];

  @SpeakeasyMetadata({ data: "json, name=filenameReference" })
  filenameReference?: string;

  @SpeakeasyMetadata({ data: "json, name=fundingStatus" })
  fundingStatus: PaymentResponseV4FundingStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=iban" })
  iban?: string;

  @SpeakeasyMetadata({ data: "json, name=individualIdentificationNumber" })
  individualIdentificationNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=invertedRate" })
  invertedRate?: number;

  @SpeakeasyMetadata({ data: "json, name=isPaymentCcyBaseCcy" })
  isPaymentCcyBaseCcy?: boolean;

  @SpeakeasyMetadata({ data: "json, name=payeeId" })
  payeeId: string;

  @SpeakeasyMetadata({ data: "json, name=paymentAmount" })
  paymentAmount: number;

  @SpeakeasyMetadata({ data: "json, name=paymentChannelId" })
  paymentChannelId?: string;

  @SpeakeasyMetadata({ data: "json, name=paymentChannelName" })
  paymentChannelName?: string;

  @SpeakeasyMetadata({ data: "json, name=paymentCurrency" })
  paymentCurrency?: PaymentAuditCurrencyEnum;

  @SpeakeasyMetadata({ data: "json, name=paymentId" })
  paymentId: string;

  @SpeakeasyMetadata({ data: "json, name=paymentMemo" })
  paymentMemo?: string;

  @SpeakeasyMetadata({ data: "json, name=paymentMetadata" })
  paymentMetadata?: string;

  @SpeakeasyMetadata({ data: "json, name=paymentTrackingReference" })
  paymentTrackingReference?: string;

  @SpeakeasyMetadata({ data: "json, name=payorId" })
  payorId: string;

  @SpeakeasyMetadata({ data: "json, name=payorName" })
  payorName?: string;

  @SpeakeasyMetadata({ data: "json, name=payorPaymentId" })
  payorPaymentId?: string;

  @SpeakeasyMetadata({ data: "json, name=payout" })
  payout?: any;

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

  @SpeakeasyMetadata({ data: "json, name=remoteSystemId" })
  remoteSystemId?: string;

  @SpeakeasyMetadata({ data: "json, name=remoteSystemPaymentId" })
  remoteSystemPaymentId?: string;

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
  sourceCurrency?: PaymentAuditCurrencyEnum;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: PaymentResponseV4StatusEnum;

  @SpeakeasyMetadata({ data: "json, name=submittedDateTime" })
  submittedDateTime: Date;

  @SpeakeasyMetadata({ data: "json, name=traceNumber" })
  traceNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=transmissionType" })
  transmissionType?: string;

  @SpeakeasyMetadata({ data: "json, name=withdrawable" })
  withdrawable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=withdrawnReason" })
  withdrawnReason?: string;
}
