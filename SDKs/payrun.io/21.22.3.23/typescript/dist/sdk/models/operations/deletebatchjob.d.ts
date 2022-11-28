import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteBatchJobPathParams extends SpeakeasyBase {
    jobId: string;
}
export declare class DeleteBatchJobHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class DeleteBatchJobRequest extends SpeakeasyBase {
    pathParams: DeleteBatchJobPathParams;
    headers: DeleteBatchJobHeaders;
}
export declare class DeleteBatchJobResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    statusCode: number;
}
