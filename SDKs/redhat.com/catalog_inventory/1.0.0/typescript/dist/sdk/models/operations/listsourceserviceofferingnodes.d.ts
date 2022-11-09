import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ListSourceServiceOfferingNodesPathParams extends SpeakeasyBase {
    id: string;
}
export declare class ListSourceServiceOfferingNodesQueryParams extends SpeakeasyBase {
    filter?: Map<string, any>;
    limit?: number;
    offset?: number;
    sortBy?: Map<string, any>;
}
export declare class ListSourceServiceOfferingNodesRequest extends SpeakeasyBase {
    pathParams: ListSourceServiceOfferingNodesPathParams;
    queryParams: ListSourceServiceOfferingNodesQueryParams;
}
export declare class ListSourceServiceOfferingNodesResponse extends SpeakeasyBase {
    contentType: string;
    errorNotFound?: shared.ErrorNotFound;
    serviceOfferingNodesCollection?: shared.ServiceOfferingNodesCollection;
    statusCode: number;
}
