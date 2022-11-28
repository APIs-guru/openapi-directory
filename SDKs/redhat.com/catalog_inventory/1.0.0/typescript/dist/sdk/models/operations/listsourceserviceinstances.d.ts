import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListSourceServiceInstancesPathParams extends SpeakeasyBase {
    id: string;
}
export declare class ListSourceServiceInstancesQueryParams extends SpeakeasyBase {
    filter?: Map<string, any>;
    limit?: number;
    offset?: number;
    sortBy?: Map<string, any>;
}
export declare class ListSourceServiceInstancesRequest extends SpeakeasyBase {
    pathParams: ListSourceServiceInstancesPathParams;
    queryParams: ListSourceServiceInstancesQueryParams;
}
export declare class ListSourceServiceInstancesResponse extends SpeakeasyBase {
    contentType: string;
    errorNotFound?: shared.ErrorNotFound;
    serviceInstancesCollection?: shared.ServiceInstancesCollection;
    statusCode: number;
}
