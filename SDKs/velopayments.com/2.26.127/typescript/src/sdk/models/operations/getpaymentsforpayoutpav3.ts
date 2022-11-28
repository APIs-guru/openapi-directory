import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetPaymentsForPayoutPaV3PathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=payoutId" })
  payoutId: string;
}

export enum GetPaymentsForPayoutPaV3StatusEnum {
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


export class GetPaymentsForPayoutPaV3QueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=paymentAmountFrom" })
  paymentAmountFrom?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=paymentAmountTo" })
  paymentAmountTo?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=remoteId" })
  remoteId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sensitive" })
  sensitive?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sourceAmountFrom" })
  sourceAmountFrom?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sourceAmountTo" })
  sourceAmountTo?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=status" })
  status?: GetPaymentsForPayoutPaV3StatusEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=submittedDateFrom" })
  submittedDateFrom?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=submittedDateTo" })
  submittedDateTo?: Date;
}


export class GetPaymentsForPayoutPaV3Request extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetPaymentsForPayoutPaV3PathParams;

  @SpeakeasyMetadata()
  queryParams: GetPaymentsForPayoutPaV3QueryParams;
}


export class GetPaymentsForPayoutPaV3Response extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getPaymentsForPayoutResponseV3?: shared.GetPaymentsForPayoutResponseV3;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  inlineResponse400?: any;

  @SpeakeasyMetadata()
  inlineResponse401?: any;

  @SpeakeasyMetadata()
  inlineResponse403?: any;

  @SpeakeasyMetadata()
  inlineResponse404?: any;
}
