import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetBatchJobInfoPathParams extends SpeakeasyBase {
    jobId: string;
}
export declare class GetBatchJobInfoHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class GetBatchJobInfoRequest extends SpeakeasyBase {
    pathParams: GetBatchJobInfoPathParams;
    headers: GetBatchJobInfoHeaders;
}
export declare class GetBatchJobInfoResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    jobInfo?: shared.JobInfo;
    statusCode: number;
}
