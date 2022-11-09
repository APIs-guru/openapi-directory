import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class EndpointGetAudioAnalysisPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class EndpointGetAudioAnalysisHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class EndpointGetAudioAnalysisSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  spotifyAuth: shared.SchemeSpotifyAuth;
}


export class EndpointGetAudioAnalysisRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: EndpointGetAudioAnalysisPathParams;

  @Metadata()
  headers: EndpointGetAudioAnalysisHeaders;

  @Metadata()
  security: EndpointGetAudioAnalysisSecurity;
}


export class EndpointGetAudioAnalysisResponse extends SpeakeasyBase {
  @Metadata()
  audioAnalysisObject?: shared.AudioAnalysisObject;

  @Metadata()
  contentType: string;

  @Metadata()
  errorResponseObject?: shared.ErrorResponseObject;

  @Metadata()
  statusCode: number;
}
