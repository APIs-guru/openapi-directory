import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetPayRunJobProgressPathParams extends SpeakeasyBase {
    jobId: string;
}
export declare class GetPayRunJobProgressHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class GetPayRunJobProgressRequest extends SpeakeasyBase {
    pathParams: GetPayRunJobProgressPathParams;
    headers: GetPayRunJobProgressHeaders;
}
export declare class GetPayRunJobProgressResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    statusCode: number;
}
