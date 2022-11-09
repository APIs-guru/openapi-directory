import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetThirdPartyJobStatusPathParams extends SpeakeasyBase {
    jobId: string;
}
export declare class GetThirdPartyJobStatusHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class GetThirdPartyJobStatusRequest extends SpeakeasyBase {
    pathParams: GetThirdPartyJobStatusPathParams;
    headers: GetThirdPartyJobStatusHeaders;
}
export declare class GetThirdPartyJobStatusResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    statusCode: number;
}
