import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class EndpointGetSeveralAudioFeaturesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ids" })
  ids: string;
}


export class EndpointGetSeveralAudioFeaturesHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class EndpointGetSeveralAudioFeaturesSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  spotifyAuth: shared.SchemeSpotifyAuth;
}


export class EndpointGetSeveralAudioFeaturesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: EndpointGetSeveralAudioFeaturesQueryParams;

  @SpeakeasyMetadata()
  headers: EndpointGetSeveralAudioFeaturesHeaders;

  @SpeakeasyMetadata()
  security: EndpointGetSeveralAudioFeaturesSecurity;
}


export class EndpointGetSeveralAudioFeaturesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  audioFeaturesArrayObject?: shared.AudioFeaturesArrayObject;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponseObject?: shared.ErrorResponseObject;

  @SpeakeasyMetadata()
  statusCode: number;
}
