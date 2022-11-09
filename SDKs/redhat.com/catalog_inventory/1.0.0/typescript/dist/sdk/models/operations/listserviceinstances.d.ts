import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ListServiceInstancesQueryParams extends SpeakeasyBase {
    filter?: Map<string, any>;
    limit?: number;
    offset?: number;
    sortBy?: Map<string, any>;
}
export declare class ListServiceInstancesRequest extends SpeakeasyBase {
    queryParams: ListServiceInstancesQueryParams;
}
export declare class ListServiceInstancesResponse extends SpeakeasyBase {
    contentType: string;
    serviceInstancesCollection?: shared.ServiceInstancesCollection;
    statusCode: number;
}
