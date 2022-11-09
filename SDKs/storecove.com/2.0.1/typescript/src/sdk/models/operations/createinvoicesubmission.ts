import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateInvoiceSubmissionRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.InvoiceSubmission;
}


export class CreateInvoiceSubmissionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorModels?: any[];

  @Metadata()
  invoiceSubmissionResult?: shared.InvoiceSubmissionResult;

  @Metadata()
  statusCode: number;
}
