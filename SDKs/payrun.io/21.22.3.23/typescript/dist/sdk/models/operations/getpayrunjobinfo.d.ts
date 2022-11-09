import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetPayRunJobInfoPathParams extends SpeakeasyBase {
    jobId: string;
}
export declare class GetPayRunJobInfoHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class GetPayRunJobInfoRequest extends SpeakeasyBase {
    pathParams: GetPayRunJobInfoPathParams;
    headers: GetPayRunJobInfoHeaders;
}
export declare class GetPayRunJobInfoResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    jobInfo?: shared.JobInfo;
    statusCode: number;
}
