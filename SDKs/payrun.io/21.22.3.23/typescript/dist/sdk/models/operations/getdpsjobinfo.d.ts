import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetDpsJobInfoPathParams extends SpeakeasyBase {
    jobId: string;
}
export declare class GetDpsJobInfoHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class GetDpsJobInfoRequest extends SpeakeasyBase {
    pathParams: GetDpsJobInfoPathParams;
    headers: GetDpsJobInfoHeaders;
}
export declare class GetDpsJobInfoResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    jobInfo?: shared.JobInfo;
    statusCode: number;
}
