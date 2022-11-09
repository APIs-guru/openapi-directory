import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetTasksQueryParams extends SpeakeasyBase {
    search?: string;
    status?: string;
}
export declare class GetTasksSecurity extends SpeakeasyBase {
    bearerAuth: shared.SchemeBearerAuth;
}
export declare class GetTasksRequest extends SpeakeasyBase {
    queryParams: GetTasksQueryParams;
    security: GetTasksSecurity;
}
export declare class GetTasksResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    tasks?: shared.Task[];
}
