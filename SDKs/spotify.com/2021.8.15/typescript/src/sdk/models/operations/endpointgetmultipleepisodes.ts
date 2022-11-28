import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class EndpointGetMultipleEpisodesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ids" })
  ids: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=market" })
  market?: string;
}


export class EndpointGetMultipleEpisodesHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class EndpointGetMultipleEpisodesSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  spotifyAuth: shared.SchemeSpotifyAuth;
}


export class EndpointGetMultipleEpisodesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: EndpointGetMultipleEpisodesQueryParams;

  @SpeakeasyMetadata()
  headers: EndpointGetMultipleEpisodesHeaders;

  @SpeakeasyMetadata()
  security: EndpointGetMultipleEpisodesSecurity;
}


export class EndpointGetMultipleEpisodesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  episodesObject?: shared.EpisodesObject;

  @SpeakeasyMetadata()
  errorResponseObject?: shared.ErrorResponseObject;

  @SpeakeasyMetadata()
  statusCode: number;
}
