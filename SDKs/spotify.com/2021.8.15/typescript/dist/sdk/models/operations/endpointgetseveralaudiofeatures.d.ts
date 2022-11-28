import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class EndpointGetSeveralAudioFeaturesQueryParams extends SpeakeasyBase {
    ids: string;
}
export declare class EndpointGetSeveralAudioFeaturesHeaders extends SpeakeasyBase {
    authorization: string;
}
export declare class EndpointGetSeveralAudioFeaturesSecurity extends SpeakeasyBase {
    spotifyAuth: shared.SchemeSpotifyAuth;
}
export declare class EndpointGetSeveralAudioFeaturesRequest extends SpeakeasyBase {
    queryParams: EndpointGetSeveralAudioFeaturesQueryParams;
    headers: EndpointGetSeveralAudioFeaturesHeaders;
    security: EndpointGetSeveralAudioFeaturesSecurity;
}
export declare class EndpointGetSeveralAudioFeaturesResponse extends SpeakeasyBase {
    audioFeaturesArrayObject?: shared.AudioFeaturesArrayObject;
    contentType: string;
    errorResponseObject?: shared.ErrorResponseObject;
    statusCode: number;
}
