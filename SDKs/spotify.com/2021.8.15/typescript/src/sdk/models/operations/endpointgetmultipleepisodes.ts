import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class EndpointGetMultipleEpisodesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=ids" })
  ids: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=market" })
  market?: string;
}


export class EndpointGetMultipleEpisodesHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class EndpointGetMultipleEpisodesSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  spotifyAuth: shared.SchemeSpotifyAuth;
}


export class EndpointGetMultipleEpisodesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: EndpointGetMultipleEpisodesQueryParams;

  @Metadata()
  headers: EndpointGetMultipleEpisodesHeaders;

  @Metadata()
  security: EndpointGetMultipleEpisodesSecurity;
}


export class EndpointGetMultipleEpisodesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  episodesObject?: shared.EpisodesObject;

  @Metadata()
  errorResponseObject?: shared.ErrorResponseObject;

  @Metadata()
  statusCode: number;
}
