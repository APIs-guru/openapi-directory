import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListSourceTasksPathParams extends SpeakeasyBase {
    id: string;
}
export declare class ListSourceTasksQueryParams extends SpeakeasyBase {
    filter?: Map<string, any>;
    limit?: number;
    offset?: number;
    sortBy?: Map<string, any>;
}
export declare class ListSourceTasksRequest extends SpeakeasyBase {
    pathParams: ListSourceTasksPathParams;
    queryParams: ListSourceTasksQueryParams;
}
export declare class ListSourceTasksResponse extends SpeakeasyBase {
    contentType: string;
    errorNotFound?: shared.ErrorNotFound;
    statusCode: number;
    tasksCollection?: shared.TasksCollection;
}
