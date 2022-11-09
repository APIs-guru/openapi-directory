import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetBatchJobStatusPathParams extends SpeakeasyBase {
    jobId: string;
}
export declare class GetBatchJobStatusHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class GetBatchJobStatusRequest extends SpeakeasyBase {
    pathParams: GetBatchJobStatusPathParams;
    headers: GetBatchJobStatusHeaders;
}
export declare class GetBatchJobStatusResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    statusCode: number;
}
