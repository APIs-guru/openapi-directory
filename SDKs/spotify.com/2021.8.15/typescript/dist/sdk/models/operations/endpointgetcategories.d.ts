import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class EndpointGetCategoriesQueryParams extends SpeakeasyBase {
    country?: string;
    limit?: number;
    locale?: string;
    offset?: number;
}
export declare class EndpointGetCategoriesHeaders extends SpeakeasyBase {
    authorization: string;
}
export declare class EndpointGetCategoriesSecurity extends SpeakeasyBase {
    spotifyAuth: shared.SchemeSpotifyAuth;
}
export declare class EndpointGetCategoriesRequest extends SpeakeasyBase {
    queryParams: EndpointGetCategoriesQueryParams;
    headers: EndpointGetCategoriesHeaders;
    security: EndpointGetCategoriesSecurity;
}
export declare class EndpointGetCategoriesResponse extends SpeakeasyBase {
    categoriesObject?: shared.CategoriesObject;
    contentType: string;
    errorResponseObject?: shared.ErrorResponseObject;
    statusCode: number;
}
