import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class EndpointGetAudioFeaturesPathParams extends SpeakeasyBase {
    id: string;
}
export declare class EndpointGetAudioFeaturesHeaders extends SpeakeasyBase {
    authorization: string;
}
export declare class EndpointGetAudioFeaturesSecurity extends SpeakeasyBase {
    spotifyAuth: shared.SchemeSpotifyAuth;
}
export declare class EndpointGetAudioFeaturesRequest extends SpeakeasyBase {
    pathParams: EndpointGetAudioFeaturesPathParams;
    headers: EndpointGetAudioFeaturesHeaders;
    security: EndpointGetAudioFeaturesSecurity;
}
export declare class EndpointGetAudioFeaturesResponse extends SpeakeasyBase {
    audioFeaturesObject?: shared.AudioFeaturesObject;
    contentType: string;
    errorResponseObject?: shared.ErrorResponseObject;
    statusCode: number;
}
