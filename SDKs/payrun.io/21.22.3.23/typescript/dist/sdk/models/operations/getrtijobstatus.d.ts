import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRtiJobStatusPathParams extends SpeakeasyBase {
    jobId: string;
}
export declare class GetRtiJobStatusHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class GetRtiJobStatusRequest extends SpeakeasyBase {
    pathParams: GetRtiJobStatusPathParams;
    headers: GetRtiJobStatusHeaders;
}
export declare class GetRtiJobStatusResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    statusCode: number;
}
