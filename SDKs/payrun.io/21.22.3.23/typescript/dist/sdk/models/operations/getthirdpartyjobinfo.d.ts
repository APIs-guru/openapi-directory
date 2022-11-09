import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetThirdPartyJobInfoPathParams extends SpeakeasyBase {
    jobId: string;
}
export declare class GetThirdPartyJobInfoHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class GetThirdPartyJobInfoRequest extends SpeakeasyBase {
    pathParams: GetThirdPartyJobInfoPathParams;
    headers: GetThirdPartyJobInfoHeaders;
}
export declare class GetThirdPartyJobInfoResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    jobInfo?: shared.JobInfo;
    statusCode: number;
}
