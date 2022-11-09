import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PreflightInvoiceRecipientRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.InvoiceRecipientPreflight;
}


export class PreflightInvoiceRecipientResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorModels?: any[];

  @Metadata()
  preflightInvoiceRecipientResult?: shared.PreflightInvoiceRecipientResult;

  @Metadata()
  statusCode: number;
}
