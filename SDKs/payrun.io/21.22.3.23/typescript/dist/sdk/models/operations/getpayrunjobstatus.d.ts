import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetPayRunJobStatusPathParams extends SpeakeasyBase {
    jobId: string;
}
export declare class GetPayRunJobStatusHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class GetPayRunJobStatusRequest extends SpeakeasyBase {
    pathParams: GetPayRunJobStatusPathParams;
    headers: GetPayRunJobStatusHeaders;
}
export declare class GetPayRunJobStatusResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    statusCode: number;
}
