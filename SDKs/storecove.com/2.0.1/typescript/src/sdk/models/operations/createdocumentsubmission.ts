import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateDocumentSubmissionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.DocumentSubmission;
}


export class CreateDocumentSubmissionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  documentSubmissionResult?: shared.DocumentSubmissionResult;

  @SpeakeasyMetadata()
  errorModels?: any[];

  @SpeakeasyMetadata()
  statusCode: number;
}
