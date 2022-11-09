import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PublishInvoicePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=invoice_id" })
  invoiceId: string;
}


export class PublishInvoiceSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class PublishInvoiceRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PublishInvoicePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.PublishInvoiceRequest;

  @Metadata()
  security: PublishInvoiceSecurity;
}


export class PublishInvoiceResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  publishInvoiceResponse?: shared.PublishInvoiceResponse;

  @Metadata()
  statusCode: number;
}
