import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetTaskPathParams extends SpeakeasyBase {
    taskId: string;
}
export declare class GetTaskSecurity extends SpeakeasyBase {
    bearerAuth: shared.SchemeBearerAuth;
}
export declare class GetTaskRequest extends SpeakeasyBase {
    pathParams: GetTaskPathParams;
    security: GetTaskSecurity;
}
export declare class GetTaskResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    task?: shared.Task;
}
