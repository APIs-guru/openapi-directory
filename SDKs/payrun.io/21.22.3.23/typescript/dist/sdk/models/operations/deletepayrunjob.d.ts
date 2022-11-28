import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeletePayRunJobPathParams extends SpeakeasyBase {
    jobId: string;
}
export declare class DeletePayRunJobHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class DeletePayRunJobRequest extends SpeakeasyBase {
    pathParams: DeletePayRunJobPathParams;
    headers: DeletePayRunJobHeaders;
}
export declare class DeletePayRunJobResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    statusCode: number;
}
