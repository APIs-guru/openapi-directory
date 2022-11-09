import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ListSourceServiceInventoriesPathParams extends SpeakeasyBase {
    id: string;
}
export declare class ListSourceServiceInventoriesQueryParams extends SpeakeasyBase {
    filter?: Map<string, any>;
    limit?: number;
    offset?: number;
    sortBy?: Map<string, any>;
}
export declare class ListSourceServiceInventoriesRequest extends SpeakeasyBase {
    pathParams: ListSourceServiceInventoriesPathParams;
    queryParams: ListSourceServiceInventoriesQueryParams;
}
export declare class ListSourceServiceInventoriesResponse extends SpeakeasyBase {
    contentType: string;
    errorNotFound?: shared.ErrorNotFound;
    serviceInventoriesCollection?: shared.ServiceInventoriesCollection;
    statusCode: number;
}
