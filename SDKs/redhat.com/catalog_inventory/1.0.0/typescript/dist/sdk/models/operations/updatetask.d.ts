import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class UpdateTaskPathParams extends SpeakeasyBase {
    id: string;
}
export declare class UpdateTaskRequest extends SpeakeasyBase {
    pathParams: UpdateTaskPathParams;
    request: shared.Task;
}
export declare class UpdateTaskResponse extends SpeakeasyBase {
    contentType: string;
    errorNotFound?: shared.ErrorNotFound;
    statusCode: number;
}
