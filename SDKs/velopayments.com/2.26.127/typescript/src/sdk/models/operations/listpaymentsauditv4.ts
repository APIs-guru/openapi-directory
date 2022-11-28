import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum ListPaymentsAuditV4StatusEnum {
    Accepted = "ACCEPTED",
    AwaitingFunds = "AWAITING_FUNDS",
    Funded = "FUNDED",
    Unfunded = "UNFUNDED",
    BankPaymentRequested = "BANK_PAYMENT_REQUESTED",
    Rejected = "REJECTED",
    AcceptedByRails = "ACCEPTED_BY_RAILS",
    Confirmed = "CONFIRMED",
    Failed = "FAILED",
    Returned = "RETURNED",
    Withdrawn = "WITHDRAWN"
}

export enum ListPaymentsAuditV4TransmissionTypeEnum {
    Ach = "ACH",
    SameDayAch = "SAME_DAY_ACH",
    Wire = "WIRE"
}


export class ListPaymentsAuditV4QueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=payeeId" })
  payeeId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=paymentAmountFrom" })
  paymentAmountFrom?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=paymentAmountTo" })
  paymentAmountTo?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=paymentCurrency" })
  paymentCurrency?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=paymentMemo" })
  paymentMemo?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=payorId" })
  payorId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=payorName" })
  payorName?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=remoteId" })
  remoteId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=remoteSystemId" })
  remoteSystemId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sensitive" })
  sensitive?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sourceAccountName" })
  sourceAccountName?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sourceAmountFrom" })
  sourceAmountFrom?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sourceAmountTo" })
  sourceAmountTo?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sourceCurrency" })
  sourceCurrency?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=status" })
  status?: ListPaymentsAuditV4StatusEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=submittedDateFrom" })
  submittedDateFrom?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=submittedDateTo" })
  submittedDateTo?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=transmissionType" })
  transmissionType?: ListPaymentsAuditV4TransmissionTypeEnum;
}


export class ListPaymentsAuditV4Request extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ListPaymentsAuditV4QueryParams;
}


export class ListPaymentsAuditV4Response extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  listPaymentsResponseV4?: shared.ListPaymentsResponseV4;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  inlineResponse400?: any;

  @SpeakeasyMetadata()
  inlineResponse401?: any;

  @SpeakeasyMetadata()
  inlineResponse403?: any;
}
