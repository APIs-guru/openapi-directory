import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetCisJobInfoPathParams extends SpeakeasyBase {
    jobId: string;
}
export declare class GetCisJobInfoHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class GetCisJobInfoRequest extends SpeakeasyBase {
    pathParams: GetCisJobInfoPathParams;
    headers: GetCisJobInfoHeaders;
}
export declare class GetCisJobInfoResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    jobInfo?: shared.JobInfo;
    statusCode: number;
}
