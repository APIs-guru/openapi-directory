import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteRtiJobPathParams extends SpeakeasyBase {
    jobId: string;
}
export declare class DeleteRtiJobHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class DeleteRtiJobRequest extends SpeakeasyBase {
    pathParams: DeleteRtiJobPathParams;
    headers: DeleteRtiJobHeaders;
}
export declare class DeleteRtiJobResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    statusCode: number;
}
