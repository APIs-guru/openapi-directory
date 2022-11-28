import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PreflightInvoiceRecipientRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.InvoiceRecipientPreflight;
}


export class PreflightInvoiceRecipientResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorModels?: any[];

  @SpeakeasyMetadata()
  preflightInvoiceRecipientResult?: shared.PreflightInvoiceRecipientResult;

  @SpeakeasyMetadata()
  statusCode: number;
}
