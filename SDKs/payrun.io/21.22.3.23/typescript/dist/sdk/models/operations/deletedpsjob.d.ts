import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class DeleteDpsJobPathParams extends SpeakeasyBase {
    jobId: string;
}
export declare class DeleteDpsJobHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class DeleteDpsJobRequest extends SpeakeasyBase {
    pathParams: DeleteDpsJobPathParams;
    headers: DeleteDpsJobHeaders;
}
export declare class DeleteDpsJobResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    statusCode: number;
}
