import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetTaskScanDataPathParams extends SpeakeasyBase {
    taskId: string;
}
export declare class GetTaskScanDataSecurity extends SpeakeasyBase {
    bearerAuth: shared.SchemeBearerAuth;
}
export declare class GetTaskScanDataRequest extends SpeakeasyBase {
    pathParams: GetTaskScanDataPathParams;
    security: GetTaskScanDataSecurity;
}
export declare class GetTaskScanDataResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
