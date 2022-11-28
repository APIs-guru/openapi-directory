import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class EndpointGetAvailableMarketsHeaders extends SpeakeasyBase {
    authorization: string;
}
export declare class EndpointGetAvailableMarketsSecurity extends SpeakeasyBase {
    spotifyAuth: shared.SchemeSpotifyAuth;
}
export declare class EndpointGetAvailableMarketsRequest extends SpeakeasyBase {
    headers: EndpointGetAvailableMarketsHeaders;
    security: EndpointGetAvailableMarketsSecurity;
}
export declare class EndpointGetAvailableMarketsResponse extends SpeakeasyBase {
    contentType: string;
    errorResponseObject?: shared.ErrorResponseObject;
    marketsObject?: shared.MarketsObject;
    statusCode: number;
}
