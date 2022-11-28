import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ListPaymentChangesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=payorId" })
  payorId: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=updatedSince" })
  updatedSince: Date;
}


export class ListPaymentChangesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ListPaymentChangesQueryParams;
}


export class ListPaymentChangesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  paymentDeltaResponseV1?: shared.PaymentDeltaResponseV1;

  @SpeakeasyMetadata()
  statusCode: number;
}
