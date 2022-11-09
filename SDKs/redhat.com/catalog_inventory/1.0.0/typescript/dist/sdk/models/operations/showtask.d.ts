import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ShowTaskPathParams extends SpeakeasyBase {
    id: string;
}
export declare class ShowTaskRequest extends SpeakeasyBase {
    pathParams: ShowTaskPathParams;
}
export declare class ShowTaskResponse extends SpeakeasyBase {
    contentType: string;
    errorNotFound?: shared.ErrorNotFound;
    statusCode: number;
    task?: shared.Task;
}
