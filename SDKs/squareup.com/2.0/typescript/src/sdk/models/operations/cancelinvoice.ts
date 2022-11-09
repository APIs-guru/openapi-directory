import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CancelInvoicePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=invoice_id" })
  invoiceId: string;
}


export class CancelInvoiceSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class CancelInvoiceRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CancelInvoicePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CancelInvoiceRequest;

  @Metadata()
  security: CancelInvoiceSecurity;
}


export class CancelInvoiceResponse extends SpeakeasyBase {
  @Metadata()
  cancelInvoiceResponse?: shared.CancelInvoiceResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
