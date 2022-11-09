import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class EndpointGetAnEpisodePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class EndpointGetAnEpisodeQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=market" })
  market?: string;
}


export class EndpointGetAnEpisodeHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class EndpointGetAnEpisodeSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  spotifyAuth: shared.SchemeSpotifyAuth;
}


export class EndpointGetAnEpisodeRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: EndpointGetAnEpisodePathParams;

  @Metadata()
  queryParams: EndpointGetAnEpisodeQueryParams;

  @Metadata()
  headers: EndpointGetAnEpisodeHeaders;

  @Metadata()
  security: EndpointGetAnEpisodeSecurity;
}


export class EndpointGetAnEpisodeResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  episodeObject?: shared.EpisodeObject;

  @Metadata()
  errorResponseObject?: shared.ErrorResponseObject;

  @Metadata()
  statusCode: number;
}
