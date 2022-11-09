import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ListTasksQueryParams extends SpeakeasyBase {
    filter?: Map<string, any>;
    limit?: number;
    offset?: number;
    sortBy?: Map<string, any>;
}
export declare class ListTasksRequest extends SpeakeasyBase {
    queryParams: ListTasksQueryParams;
}
export declare class ListTasksResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    tasksCollection?: shared.TasksCollection;
}
