import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum GetAllPaymentsSortEnum {
    Asc = "asc",
    Desc = "desc"
}


export class GetAllPaymentsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_number" })
  pageNumber?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_size" })
  pageSize?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=payment_type" })
  paymentType?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=purpose" })
  purpose?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=service_provider" })
  serviceProvider?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: GetAllPaymentsSortEnum;
}


export class GetAllPaymentsHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-api-key" })
  xApiKey: string;
}


export class GetAllPaymentsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiSecretKey: shared.SchemeApiSecretKey;
}


export class GetAllPayments200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=next_page_available" })
  nextPageAvailable: boolean;

  @SpeakeasyMetadata({ data: "json, name=payments" })
  payments: any[];
}


export class GetAllPaymentsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetAllPaymentsQueryParams;

  @SpeakeasyMetadata()
  headers: GetAllPaymentsHeaders;

  @SpeakeasyMetadata()
  security: GetAllPaymentsSecurity;
}


export class GetAllPaymentsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getAllPayments200ApplicationJsonObject?: GetAllPayments200ApplicationJson;

  @SpeakeasyMetadata()
  getAllPayments400ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  getAllPayments401ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  getAllPayments403ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  getAllPayments404ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  getAllPayments429ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  getAllPayments500ApplicationJsonAny?: any;
}
