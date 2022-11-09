import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class HideTaskPathParams extends SpeakeasyBase {
    taskId: string;
}
export declare class HideTaskSecurity extends SpeakeasyBase {
    bearerAuth: shared.SchemeBearerAuth;
}
export declare class HideTaskRequest extends SpeakeasyBase {
    pathParams: HideTaskPathParams;
    security: HideTaskSecurity;
}
export declare class HideTaskResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
