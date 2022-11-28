import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetDpsJobProgressPathParams extends SpeakeasyBase {
    jobId: string;
}
export declare class GetDpsJobProgressHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class GetDpsJobProgressRequest extends SpeakeasyBase {
    pathParams: GetDpsJobProgressPathParams;
    headers: GetDpsJobProgressHeaders;
}
export declare class GetDpsJobProgressResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    statusCode: number;
}
