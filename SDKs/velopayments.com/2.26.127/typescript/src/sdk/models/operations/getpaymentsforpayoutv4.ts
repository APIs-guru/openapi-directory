import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetPaymentsForPayoutV4PathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=payoutId" })
  payoutId: string;
}

export enum GetPaymentsForPayoutV4StatusEnum {
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

export enum GetPaymentsForPayoutV4TransmissionTypeEnum {
    Ach = "ACH"
,    SameDayAch = "SAME_DAY_ACH"
,    Wire = "WIRE"
}


export class GetPaymentsForPayoutV4QueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=pageSize" })
  pageSize?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=paymentAmountFrom" })
  paymentAmountFrom?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=paymentAmountTo" })
  paymentAmountTo?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=remoteId" })
  remoteId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=remoteSystemId" })
  remoteSystemId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sensitive" })
  sensitive?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sourceAmountFrom" })
  sourceAmountFrom?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sourceAmountTo" })
  sourceAmountTo?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=status" })
  status?: GetPaymentsForPayoutV4StatusEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=submittedDateFrom" })
  submittedDateFrom?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=submittedDateTo" })
  submittedDateTo?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=transmissionType" })
  transmissionType?: GetPaymentsForPayoutV4TransmissionTypeEnum;
}


export class GetPaymentsForPayoutV4Request extends SpeakeasyBase {
  @Metadata()
  pathParams: GetPaymentsForPayoutV4PathParams;

  @Metadata()
  queryParams: GetPaymentsForPayoutV4QueryParams;
}


export class GetPaymentsForPayoutV4Response extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getPaymentsForPayoutResponseV4?: shared.GetPaymentsForPayoutResponseV4;

  @Metadata()
  statusCode: number;

  @Metadata()
  inlineResponse400?: any;

  @Metadata()
  inlineResponse401?: any;

  @Metadata()
  inlineResponse403?: any;

  @Metadata()
  inlineResponse404?: any;
}
