import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetInvoiceJsonPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=guid" })
  guid: string;
}


export class GetInvoiceJsonQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=pmv" })
  pmv?: string;
}


export class GetInvoiceJsonRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetInvoiceJsonPathParams;

  @Metadata()
  queryParams: GetInvoiceJsonQueryParams;
}


export class GetInvoiceJsonResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  purchaseInvoice?: any;

  @Metadata()
  statusCode: number;
}
