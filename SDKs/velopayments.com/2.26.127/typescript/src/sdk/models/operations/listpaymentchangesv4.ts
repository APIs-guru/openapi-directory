import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListPaymentChangesV4QueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=pageSize" })
  pageSize?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=payorId" })
  payorId: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=updatedSince" })
  updatedSince: Date;
}


export class ListPaymentChangesV4Request extends SpeakeasyBase {
  @Metadata()
  queryParams: ListPaymentChangesV4QueryParams;
}


export class ListPaymentChangesV4Response extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  paymentDeltaResponse?: shared.PaymentDeltaResponse;

  @Metadata()
  statusCode: number;
}
