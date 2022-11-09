import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ListServiceOfferingsQueryParams extends SpeakeasyBase {
    filter?: Map<string, any>;
    limit?: number;
    offset?: number;
    sortBy?: Map<string, any>;
}
export declare class ListServiceOfferingsRequest extends SpeakeasyBase {
    queryParams: ListServiceOfferingsQueryParams;
}
export declare class ListServiceOfferingsResponse extends SpeakeasyBase {
    contentType: string;
    serviceOfferingsCollection?: shared.ServiceOfferingsCollection;
    statusCode: number;
}
