import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetInvoiceJsonPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=guid" })
  guid: string;
}


export class GetInvoiceJsonQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pmv" })
  pmv?: string;
}


export class GetInvoiceJsonRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetInvoiceJsonPathParams;

  @SpeakeasyMetadata()
  queryParams: GetInvoiceJsonQueryParams;
}


export class GetInvoiceJsonResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  purchaseInvoice?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
