import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateInvoicePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=invoice_id" })
  invoiceId: string;
}


export class UpdateInvoiceSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class UpdateInvoiceRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateInvoicePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.UpdateInvoiceRequest;

  @Metadata()
  security: UpdateInvoiceSecurity;
}


export class UpdateInvoiceResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateInvoiceResponse?: shared.UpdateInvoiceResponse;
}
