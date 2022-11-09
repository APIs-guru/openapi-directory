import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class EndpointGetAudioFeaturesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class EndpointGetAudioFeaturesHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class EndpointGetAudioFeaturesSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  spotifyAuth: shared.SchemeSpotifyAuth;
}


export class EndpointGetAudioFeaturesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: EndpointGetAudioFeaturesPathParams;

  @Metadata()
  headers: EndpointGetAudioFeaturesHeaders;

  @Metadata()
  security: EndpointGetAudioFeaturesSecurity;
}


export class EndpointGetAudioFeaturesResponse extends SpeakeasyBase {
  @Metadata()
  audioFeaturesObject?: shared.AudioFeaturesObject;

  @Metadata()
  contentType: string;

  @Metadata()
  errorResponseObject?: shared.ErrorResponseObject;

  @Metadata()
  statusCode: number;
}
