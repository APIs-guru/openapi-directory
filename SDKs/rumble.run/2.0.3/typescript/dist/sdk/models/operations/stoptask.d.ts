import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class StopTaskPathParams extends SpeakeasyBase {
    taskId: string;
}
export declare class StopTaskSecurity extends SpeakeasyBase {
    bearerAuth: shared.SchemeBearerAuth;
}
export declare class StopTaskRequest extends SpeakeasyBase {
    pathParams: StopTaskPathParams;
    security: StopTaskSecurity;
}
export declare class StopTaskResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
