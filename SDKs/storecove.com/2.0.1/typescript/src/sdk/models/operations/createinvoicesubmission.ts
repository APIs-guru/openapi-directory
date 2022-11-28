import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateInvoiceSubmissionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.InvoiceSubmission;
}


export class CreateInvoiceSubmissionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorModels?: any[];

  @SpeakeasyMetadata()
  invoiceSubmissionResult?: shared.InvoiceSubmissionResult;

  @SpeakeasyMetadata()
  statusCode: number;
}
