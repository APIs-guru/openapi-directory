import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetDpsJobStatusPathParams extends SpeakeasyBase {
    jobId: string;
}
export declare class GetDpsJobStatusHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class GetDpsJobStatusRequest extends SpeakeasyBase {
    pathParams: GetDpsJobStatusPathParams;
    headers: GetDpsJobStatusHeaders;
}
export declare class GetDpsJobStatusResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    statusCode: number;
}
