import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ListServiceOfferingServiceOfferingNodesPathParams extends SpeakeasyBase {
    id: string;
}
export declare class ListServiceOfferingServiceOfferingNodesQueryParams extends SpeakeasyBase {
    filter?: Map<string, any>;
    limit?: number;
    offset?: number;
    sortBy?: Map<string, any>;
}
export declare class ListServiceOfferingServiceOfferingNodesRequest extends SpeakeasyBase {
    pathParams: ListServiceOfferingServiceOfferingNodesPathParams;
    queryParams: ListServiceOfferingServiceOfferingNodesQueryParams;
}
export declare class ListServiceOfferingServiceOfferingNodesResponse extends SpeakeasyBase {
    contentType: string;
    errorNotFound?: shared.ErrorNotFound;
    serviceOfferingNodesCollection?: shared.ServiceOfferingNodesCollection;
    statusCode: number;
}
