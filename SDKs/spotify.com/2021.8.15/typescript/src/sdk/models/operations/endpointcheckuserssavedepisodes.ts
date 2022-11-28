import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class EndpointCheckUsersSavedEpisodesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ids" })
  ids: string;
}


export class EndpointCheckUsersSavedEpisodesHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class EndpointCheckUsersSavedEpisodesSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  spotifyAuth: shared.SchemeSpotifyAuth;
}


export class EndpointCheckUsersSavedEpisodesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: EndpointCheckUsersSavedEpisodesQueryParams;

  @SpeakeasyMetadata()
  headers: EndpointCheckUsersSavedEpisodesHeaders;

  @SpeakeasyMetadata()
  security: EndpointCheckUsersSavedEpisodesSecurity;
}


export class EndpointCheckUsersSavedEpisodesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponseObject?: shared.ErrorResponseObject;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  endpointCheckUsersSavedEpisodes200ApplicationJsonBooleans?: boolean[];
}
