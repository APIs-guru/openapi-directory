import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ListServiceInventoriesQueryParams extends SpeakeasyBase {
    filter?: Map<string, any>;
    limit?: number;
    offset?: number;
    sortBy?: Map<string, any>;
}
export declare class ListServiceInventoriesRequest extends SpeakeasyBase {
    queryParams: ListServiceInventoriesQueryParams;
}
export declare class ListServiceInventoriesResponse extends SpeakeasyBase {
    contentType: string;
    serviceInventoriesCollection?: shared.ServiceInventoriesCollection;
    statusCode: number;
}
