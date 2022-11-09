import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class PostNewBatchJobHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class PostNewBatchJobRequest extends SpeakeasyBase {
    headers: PostNewBatchJobHeaders;
    request: shared.BatchJobInstruction;
}
export declare class PostNewBatchJobResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    link?: shared.Link;
    statusCode: number;
}
