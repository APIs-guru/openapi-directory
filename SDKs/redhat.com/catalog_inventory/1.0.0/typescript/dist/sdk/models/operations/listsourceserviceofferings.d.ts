import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ListSourceServiceOfferingsPathParams extends SpeakeasyBase {
    id: string;
}
export declare class ListSourceServiceOfferingsQueryParams extends SpeakeasyBase {
    filter?: Map<string, any>;
    limit?: number;
    offset?: number;
    sortBy?: Map<string, any>;
}
export declare class ListSourceServiceOfferingsRequest extends SpeakeasyBase {
    pathParams: ListSourceServiceOfferingsPathParams;
    queryParams: ListSourceServiceOfferingsQueryParams;
}
export declare class ListSourceServiceOfferingsResponse extends SpeakeasyBase {
    contentType: string;
    errorNotFound?: shared.ErrorNotFound;
    serviceOfferingsCollection?: shared.ServiceOfferingsCollection;
    statusCode: number;
}
