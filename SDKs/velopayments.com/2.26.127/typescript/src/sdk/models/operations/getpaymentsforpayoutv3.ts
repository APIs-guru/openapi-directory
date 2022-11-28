import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetPaymentsForPayoutV3PathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=payoutId" })
  payoutId: string;
}

export enum GetPaymentsForPayoutV3StatusEnum {
    Accepted = "ACCEPTED",
    Rejected = "REJECTED",
    Withdrawn = "WITHDRAWN",
    Withdrawable = "WITHDRAWABLE"
}

export enum GetPaymentsForPayoutV3TransmissionTypeEnum {
    Ach = "ACH",
    SameDayAch = "SAME_DAY_ACH",
    Wire = "WIRE"
}


export class GetPaymentsForPayoutV3QueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=paymentMemo" })
  paymentMemo?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=payorPaymentId" })
  payorPaymentId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=remoteId" })
  remoteId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sourceAccountName" })
  sourceAccountName?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=status" })
  status?: GetPaymentsForPayoutV3StatusEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=transmissionType" })
  transmissionType?: GetPaymentsForPayoutV3TransmissionTypeEnum;
}


export class GetPaymentsForPayoutV3Request extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetPaymentsForPayoutV3PathParams;

  @SpeakeasyMetadata()
  queryParams: GetPaymentsForPayoutV3QueryParams;
}


export class GetPaymentsForPayoutV3Response extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  pagedPaymentsResponseV3?: shared.PagedPaymentsResponseV3;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  inlineResponse404?: any;
}
