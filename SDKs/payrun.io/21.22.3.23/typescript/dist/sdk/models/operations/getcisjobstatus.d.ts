import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetCisJobStatusPathParams extends SpeakeasyBase {
    jobId: string;
}
export declare class GetCisJobStatusHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class GetCisJobStatusRequest extends SpeakeasyBase {
    pathParams: GetCisJobStatusPathParams;
    headers: GetCisJobStatusHeaders;
}
export declare class GetCisJobStatusResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    statusCode: number;
}
