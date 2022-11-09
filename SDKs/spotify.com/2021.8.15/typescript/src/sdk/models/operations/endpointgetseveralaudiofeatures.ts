import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class EndpointGetSeveralAudioFeaturesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=ids" })
  ids: string;
}


export class EndpointGetSeveralAudioFeaturesHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class EndpointGetSeveralAudioFeaturesSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  spotifyAuth: shared.SchemeSpotifyAuth;
}


export class EndpointGetSeveralAudioFeaturesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: EndpointGetSeveralAudioFeaturesQueryParams;

  @Metadata()
  headers: EndpointGetSeveralAudioFeaturesHeaders;

  @Metadata()
  security: EndpointGetSeveralAudioFeaturesSecurity;
}


export class EndpointGetSeveralAudioFeaturesResponse extends SpeakeasyBase {
  @Metadata()
  audioFeaturesArrayObject?: shared.AudioFeaturesArrayObject;

  @Metadata()
  contentType: string;

  @Metadata()
  errorResponseObject?: shared.ErrorResponseObject;

  @Metadata()
  statusCode: number;
}
