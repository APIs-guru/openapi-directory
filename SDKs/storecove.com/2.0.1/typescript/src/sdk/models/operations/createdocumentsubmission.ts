import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateDocumentSubmissionRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DocumentSubmission;
}


export class CreateDocumentSubmissionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  documentSubmissionResult?: shared.DocumentSubmissionResult;

  @Metadata()
  errorModels?: any[];

  @Metadata()
  statusCode: number;
}
