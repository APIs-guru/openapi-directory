import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateDocumentSubmissionRequest extends SpeakeasyBase {
    request: shared.DocumentSubmission;
}
export declare class CreateDocumentSubmissionResponse extends SpeakeasyBase {
    contentType: string;
    documentSubmissionResult?: shared.DocumentSubmissionResult;
    errorModels?: any[];
    statusCode: number;
}
