import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum ListPaymentsAuditV4StatusEnum {
    Accepted = "ACCEPTED"
,    AwaitingFunds = "AWAITING_FUNDS"
,    Funded = "FUNDED"
,    Unfunded = "UNFUNDED"
,    BankPaymentRequested = "BANK_PAYMENT_REQUESTED"
,    Rejected = "REJECTED"
,    AcceptedByRails = "ACCEPTED_BY_RAILS"
,    Confirmed = "CONFIRMED"
,    Failed = "FAILED"
,    Returned = "RETURNED"
,    Withdrawn = "WITHDRAWN"
}

export enum ListPaymentsAuditV4TransmissionTypeEnum {
    Ach = "ACH"
,    SameDayAch = "SAME_DAY_ACH"
,    Wire = "WIRE"
}


export class ListPaymentsAuditV4QueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=pageSize" })
  pageSize?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=payeeId" })
  payeeId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=paymentAmountFrom" })
  paymentAmountFrom?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=paymentAmountTo" })
  paymentAmountTo?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=paymentCurrency" })
  paymentCurrency?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=paymentMemo" })
  paymentMemo?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=payorId" })
  payorId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=payorName" })
  payorName?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=remoteId" })
  remoteId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=remoteSystemId" })
  remoteSystemId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sensitive" })
  sensitive?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sourceAccountName" })
  sourceAccountName?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sourceAmountFrom" })
  sourceAmountFrom?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sourceAmountTo" })
  sourceAmountTo?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sourceCurrency" })
  sourceCurrency?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=status" })
  status?: ListPaymentsAuditV4StatusEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=submittedDateFrom" })
  submittedDateFrom?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=submittedDateTo" })
  submittedDateTo?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=transmissionType" })
  transmissionType?: ListPaymentsAuditV4TransmissionTypeEnum;
}


export class ListPaymentsAuditV4Request extends SpeakeasyBase {
  @Metadata()
  queryParams: ListPaymentsAuditV4QueryParams;
}


export class ListPaymentsAuditV4Response extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listPaymentsResponseV4?: shared.ListPaymentsResponseV4;

  @Metadata()
  statusCode: number;

  @Metadata()
  inlineResponse400?: any;

  @Metadata()
  inlineResponse401?: any;

  @Metadata()
  inlineResponse403?: any;
}
