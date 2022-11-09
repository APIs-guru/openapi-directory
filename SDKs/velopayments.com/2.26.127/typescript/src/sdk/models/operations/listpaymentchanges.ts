import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListPaymentChangesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=pageSize" })
  pageSize?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=payorId" })
  payorId: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=updatedSince" })
  updatedSince: Date;
}


export class ListPaymentChangesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ListPaymentChangesQueryParams;
}


export class ListPaymentChangesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  paymentDeltaResponseV1?: shared.PaymentDeltaResponseV1;

  @Metadata()
  statusCode: number;
}
