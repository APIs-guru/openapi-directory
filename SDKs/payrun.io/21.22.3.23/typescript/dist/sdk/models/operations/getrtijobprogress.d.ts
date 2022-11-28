import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRtiJobProgressPathParams extends SpeakeasyBase {
    jobId: string;
}
export declare class GetRtiJobProgressHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class GetRtiJobProgressRequest extends SpeakeasyBase {
    pathParams: GetRtiJobProgressPathParams;
    headers: GetRtiJobProgressHeaders;
}
export declare class GetRtiJobProgressResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    statusCode: number;
}
