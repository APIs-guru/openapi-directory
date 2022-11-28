import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetThirdPartyJobProgressPathParams extends SpeakeasyBase {
    jobId: string;
}
export declare class GetThirdPartyJobProgressHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class GetThirdPartyJobProgressRequest extends SpeakeasyBase {
    pathParams: GetThirdPartyJobProgressPathParams;
    headers: GetThirdPartyJobProgressHeaders;
}
export declare class GetThirdPartyJobProgressResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    statusCode: number;
}
