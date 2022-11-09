import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ListServiceOfferingNodesQueryParams extends SpeakeasyBase {
    filter?: Map<string, any>;
    limit?: number;
    offset?: number;
    sortBy?: Map<string, any>;
}
export declare class ListServiceOfferingNodesRequest extends SpeakeasyBase {
    queryParams: ListServiceOfferingNodesQueryParams;
}
export declare class ListServiceOfferingNodesResponse extends SpeakeasyBase {
    contentType: string;
    serviceOfferingNodesCollection?: shared.ServiceOfferingNodesCollection;
    statusCode: number;
}
