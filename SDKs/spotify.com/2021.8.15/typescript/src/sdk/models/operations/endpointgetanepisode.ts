import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class EndpointGetAnEpisodePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class EndpointGetAnEpisodeQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=market" })
  market?: string;
}


export class EndpointGetAnEpisodeHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class EndpointGetAnEpisodeSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  spotifyAuth: shared.SchemeSpotifyAuth;
}


export class EndpointGetAnEpisodeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: EndpointGetAnEpisodePathParams;

  @SpeakeasyMetadata()
  queryParams: EndpointGetAnEpisodeQueryParams;

  @SpeakeasyMetadata()
  headers: EndpointGetAnEpisodeHeaders;

  @SpeakeasyMetadata()
  security: EndpointGetAnEpisodeSecurity;
}


export class EndpointGetAnEpisodeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  episodeObject?: shared.EpisodeObject;

  @SpeakeasyMetadata()
  errorResponseObject?: shared.ErrorResponseObject;

  @SpeakeasyMetadata()
  statusCode: number;
}
