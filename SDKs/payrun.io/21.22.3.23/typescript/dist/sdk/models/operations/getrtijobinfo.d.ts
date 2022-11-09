import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetRtiJobInfoPathParams extends SpeakeasyBase {
    jobId: string;
}
export declare class GetRtiJobInfoHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class GetRtiJobInfoRequest extends SpeakeasyBase {
    pathParams: GetRtiJobInfoPathParams;
    headers: GetRtiJobInfoHeaders;
}
export declare class GetRtiJobInfoResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    jobInfo?: shared.JobInfo;
    statusCode: number;
}
