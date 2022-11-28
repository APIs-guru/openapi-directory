import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListServiceOfferingServiceInstancesPathParams extends SpeakeasyBase {
    id: string;
}
export declare class ListServiceOfferingServiceInstancesQueryParams extends SpeakeasyBase {
    filter?: Map<string, any>;
    limit?: number;
    offset?: number;
    sortBy?: Map<string, any>;
}
export declare class ListServiceOfferingServiceInstancesRequest extends SpeakeasyBase {
    pathParams: ListServiceOfferingServiceInstancesPathParams;
    queryParams: ListServiceOfferingServiceInstancesQueryParams;
}
export declare class ListServiceOfferingServiceInstancesResponse extends SpeakeasyBase {
    contentType: string;
    errorNotFound?: shared.ErrorNotFound;
    serviceInstancesCollection?: shared.ServiceInstancesCollection;
    statusCode: number;
}
