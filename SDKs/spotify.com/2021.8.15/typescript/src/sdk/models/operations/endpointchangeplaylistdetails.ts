import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class EndpointChangePlaylistDetailsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=playlist_id" })
  playlistId: string;
}


export class EndpointChangePlaylistDetailsHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;

  @Metadata({ data: "header, style=simple;explode=false;name=Content-Type" })
  contentType: string;
}


export class EndpointChangePlaylistDetailsRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=collaborative" })
  collaborative?: boolean;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=public" })
  public?: boolean;
}


export class EndpointChangePlaylistDetailsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  spotifyAuth: shared.SchemeSpotifyAuth;
}


export class EndpointChangePlaylistDetailsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: EndpointChangePlaylistDetailsPathParams;

  @Metadata()
  headers: EndpointChangePlaylistDetailsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request?: EndpointChangePlaylistDetailsRequestBody;

  @Metadata()
  security: EndpointChangePlaylistDetailsSecurity;
}


export class EndpointChangePlaylistDetailsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponseObject?: shared.ErrorResponseObject;

  @Metadata()
  statusCode: number;
}
