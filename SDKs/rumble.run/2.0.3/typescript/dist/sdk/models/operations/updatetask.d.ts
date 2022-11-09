import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class UpdateTaskPathParams extends SpeakeasyBase {
    taskId: string;
}
export declare class UpdateTaskSecurity extends SpeakeasyBase {
    bearerAuth: shared.SchemeBearerAuth;
}
export declare class UpdateTaskRequest extends SpeakeasyBase {
    pathParams: UpdateTaskPathParams;
    request: shared.Task;
    security: UpdateTaskSecurity;
}
export declare class UpdateTaskResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    task?: shared.Task;
}
