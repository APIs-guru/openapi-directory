import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetInvoicePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=invoice_id" })
  invoiceId: string;
}


export class GetInvoiceSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class GetInvoiceRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetInvoicePathParams;

  @Metadata()
  security: GetInvoiceSecurity;
}


export class GetInvoiceResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getInvoiceResponse?: shared.GetInvoiceResponse;

  @Metadata()
  statusCode: number;
}
