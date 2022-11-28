import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class EndpointGetACategoryPathParams extends SpeakeasyBase {
    categoryId: string;
}
export declare class EndpointGetACategoryQueryParams extends SpeakeasyBase {
    country?: string;
    locale?: string;
}
export declare class EndpointGetACategoryHeaders extends SpeakeasyBase {
    authorization: string;
}
export declare class EndpointGetACategorySecurity extends SpeakeasyBase {
    spotifyAuth: shared.SchemeSpotifyAuth;
}
export declare class EndpointGetACategoryRequest extends SpeakeasyBase {
    pathParams: EndpointGetACategoryPathParams;
    queryParams: EndpointGetACategoryQueryParams;
    headers: EndpointGetACategoryHeaders;
    security: EndpointGetACategorySecurity;
}
export declare class EndpointGetACategoryResponse extends SpeakeasyBase {
    categoryObject?: shared.CategoryObject;
    contentType: string;
    errorResponseObject?: shared.ErrorResponseObject;
    statusCode: number;
}
