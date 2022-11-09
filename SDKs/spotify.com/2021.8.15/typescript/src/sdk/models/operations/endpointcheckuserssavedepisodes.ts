import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class EndpointCheckUsersSavedEpisodesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=ids" })
  ids: string;
}


export class EndpointCheckUsersSavedEpisodesHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class EndpointCheckUsersSavedEpisodesSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  spotifyAuth: shared.SchemeSpotifyAuth;
}


export class EndpointCheckUsersSavedEpisodesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: EndpointCheckUsersSavedEpisodesQueryParams;

  @Metadata()
  headers: EndpointCheckUsersSavedEpisodesHeaders;

  @Metadata()
  security: EndpointCheckUsersSavedEpisodesSecurity;
}


export class EndpointCheckUsersSavedEpisodesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponseObject?: shared.ErrorResponseObject;

  @Metadata()
  statusCode: number;

  @Metadata()
  endpointCheckUsersSavedEpisodes200ApplicationJsonBooleans?: boolean[];
}
