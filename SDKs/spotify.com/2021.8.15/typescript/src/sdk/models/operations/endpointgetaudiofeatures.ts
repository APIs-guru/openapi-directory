import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class EndpointGetAudioFeaturesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class EndpointGetAudioFeaturesHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class EndpointGetAudioFeaturesSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  spotifyAuth: shared.SchemeSpotifyAuth;
}


export class EndpointGetAudioFeaturesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: EndpointGetAudioFeaturesPathParams;

  @SpeakeasyMetadata()
  headers: EndpointGetAudioFeaturesHeaders;

  @SpeakeasyMetadata()
  security: EndpointGetAudioFeaturesSecurity;
}


export class EndpointGetAudioFeaturesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  audioFeaturesObject?: shared.AudioFeaturesObject;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponseObject?: shared.ErrorResponseObject;

  @SpeakeasyMetadata()
  statusCode: number;
}
