import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetBatchJobProgressPathParams extends SpeakeasyBase {
    jobId: string;
}
export declare class GetBatchJobProgressHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class GetBatchJobProgressRequest extends SpeakeasyBase {
    pathParams: GetBatchJobProgressPathParams;
    headers: GetBatchJobProgressHeaders;
}
export declare class GetBatchJobProgressResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    statusCode: number;
}
