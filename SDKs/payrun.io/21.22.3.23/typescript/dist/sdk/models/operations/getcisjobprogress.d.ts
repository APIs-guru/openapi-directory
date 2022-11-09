import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetCisJobProgressPathParams extends SpeakeasyBase {
    jobId: string;
}
export declare class GetCisJobProgressHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class GetCisJobProgressRequest extends SpeakeasyBase {
    pathParams: GetCisJobProgressPathParams;
    headers: GetCisJobProgressHeaders;
}
export declare class GetCisJobProgressResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    statusCode: number;
}
