import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class EndpointGetNewReleasesQueryParams extends SpeakeasyBase {
    country?: string;
    limit?: number;
    offset?: number;
}
export declare class EndpointGetNewReleasesHeaders extends SpeakeasyBase {
    authorization: string;
}
export declare class EndpointGetNewReleasesSecurity extends SpeakeasyBase {
    spotifyAuth: shared.SchemeSpotifyAuth;
}
export declare class EndpointGetNewReleasesRequest extends SpeakeasyBase {
    queryParams: EndpointGetNewReleasesQueryParams;
    headers: EndpointGetNewReleasesHeaders;
    security: EndpointGetNewReleasesSecurity;
}
export declare class EndpointGetNewReleasesResponse extends SpeakeasyBase {
    contentType: string;
    errorResponseObject?: shared.ErrorResponseObject;
    newReleasesObject?: shared.NewReleasesObject;
    statusCode: number;
}
