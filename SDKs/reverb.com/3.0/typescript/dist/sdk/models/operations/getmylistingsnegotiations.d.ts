import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetMyListingsNegotiationsQueryParams extends SpeakeasyBase {
    offset?: number;
    page?: number;
    perPage?: number;
}
export declare class GetMyListingsNegotiationsSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class GetMyListingsNegotiationsRequest extends SpeakeasyBase {
    queryParams: GetMyListingsNegotiationsQueryParams;
    security: GetMyListingsNegotiationsSecurity;
}
export declare class GetMyListingsNegotiationsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
