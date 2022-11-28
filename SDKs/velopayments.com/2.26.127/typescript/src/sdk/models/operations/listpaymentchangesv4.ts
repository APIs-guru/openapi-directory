import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ListPaymentChangesV4QueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=payorId" })
  payorId: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=updatedSince" })
  updatedSince: Date;
}


export class ListPaymentChangesV4Request extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ListPaymentChangesV4QueryParams;
}


export class ListPaymentChangesV4Response extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  paymentDeltaResponse?: shared.PaymentDeltaResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
