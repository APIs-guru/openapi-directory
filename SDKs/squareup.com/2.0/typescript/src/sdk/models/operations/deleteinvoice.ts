import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeleteInvoicePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=invoice_id" })
  invoiceId: string;
}


export class DeleteInvoiceQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=version" })
  version?: number;
}


export class DeleteInvoiceSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class DeleteInvoiceRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteInvoicePathParams;

  @Metadata()
  queryParams: DeleteInvoiceQueryParams;

  @Metadata()
  security: DeleteInvoiceSecurity;
}


export class DeleteInvoiceResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  deleteInvoiceResponse?: shared.DeleteInvoiceResponse;

  @Metadata()
  statusCode: number;
}
