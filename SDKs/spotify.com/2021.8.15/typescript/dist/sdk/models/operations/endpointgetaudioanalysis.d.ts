import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class EndpointGetAudioAnalysisPathParams extends SpeakeasyBase {
    id: string;
}
export declare class EndpointGetAudioAnalysisHeaders extends SpeakeasyBase {
    authorization: string;
}
export declare class EndpointGetAudioAnalysisSecurity extends SpeakeasyBase {
    spotifyAuth: shared.SchemeSpotifyAuth;
}
export declare class EndpointGetAudioAnalysisRequest extends SpeakeasyBase {
    pathParams: EndpointGetAudioAnalysisPathParams;
    headers: EndpointGetAudioAnalysisHeaders;
    security: EndpointGetAudioAnalysisSecurity;
}
export declare class EndpointGetAudioAnalysisResponse extends SpeakeasyBase {
    audioAnalysisObject?: shared.AudioAnalysisObject;
    contentType: string;
    errorResponseObject?: shared.ErrorResponseObject;
    statusCode: number;
}
