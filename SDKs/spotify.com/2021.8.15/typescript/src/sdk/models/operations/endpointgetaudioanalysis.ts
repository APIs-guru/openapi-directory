import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class EndpointGetAudioAnalysisPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class EndpointGetAudioAnalysisHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class EndpointGetAudioAnalysisSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  spotifyAuth: shared.SchemeSpotifyAuth;
}


export class EndpointGetAudioAnalysisRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: EndpointGetAudioAnalysisPathParams;

  @SpeakeasyMetadata()
  headers: EndpointGetAudioAnalysisHeaders;

  @SpeakeasyMetadata()
  security: EndpointGetAudioAnalysisSecurity;
}


export class EndpointGetAudioAnalysisResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  audioAnalysisObject?: shared.AudioAnalysisObject;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponseObject?: shared.ErrorResponseObject;

  @SpeakeasyMetadata()
  statusCode: number;
}
