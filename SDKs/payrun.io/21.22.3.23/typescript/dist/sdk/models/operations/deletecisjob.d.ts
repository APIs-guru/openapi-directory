import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class DeleteCisJobPathParams extends SpeakeasyBase {
    jobId: string;
}
export declare class DeleteCisJobHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class DeleteCisJobRequest extends SpeakeasyBase {
    pathParams: DeleteCisJobPathParams;
    headers: DeleteCisJobHeaders;
}
export declare class DeleteCisJobResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    statusCode: number;
}
