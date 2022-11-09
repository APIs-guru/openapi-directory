import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetPaymentsForPayoutV3PathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=payoutId" })
  payoutId: string;
}

export enum GetPaymentsForPayoutV3StatusEnum {
    Accepted = "ACCEPTED"
,    Rejected = "REJECTED"
,    Withdrawn = "WITHDRAWN"
,    Withdrawable = "WITHDRAWABLE"
}

export enum GetPaymentsForPayoutV3TransmissionTypeEnum {
    Ach = "ACH"
,    SameDayAch = "SAME_DAY_ACH"
,    Wire = "WIRE"
}


export class GetPaymentsForPayoutV3QueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=pageSize" })
  pageSize?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=paymentMemo" })
  paymentMemo?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=payorPaymentId" })
  payorPaymentId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=remoteId" })
  remoteId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sourceAccountName" })
  sourceAccountName?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=status" })
  status?: GetPaymentsForPayoutV3StatusEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=transmissionType" })
  transmissionType?: GetPaymentsForPayoutV3TransmissionTypeEnum;
}


export class GetPaymentsForPayoutV3Request extends SpeakeasyBase {
  @Metadata()
  pathParams: GetPaymentsForPayoutV3PathParams;

  @Metadata()
  queryParams: GetPaymentsForPayoutV3QueryParams;
}


export class GetPaymentsForPayoutV3Response extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  pagedPaymentsResponseV3?: shared.PagedPaymentsResponseV3;

  @Metadata()
  statusCode: number;

  @Metadata()
  inlineResponse404?: any;
}
