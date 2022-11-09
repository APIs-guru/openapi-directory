import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetAccountTasksQueryParams extends SpeakeasyBase {
    search?: string;
}
export declare class GetAccountTasksSecurity extends SpeakeasyBase {
    bearerAuth: shared.SchemeBearerAuth;
}
export declare class GetAccountTasksRequest extends SpeakeasyBase {
    queryParams: GetAccountTasksQueryParams;
    security: GetAccountTasksSecurity;
}
export declare class GetAccountTasksResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    tasks?: shared.Task[];
}
