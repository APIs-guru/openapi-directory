import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class EndpointCreatePlaylistPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=user_id" })
  userId: string;
}


export class EndpointCreatePlaylistHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;

  @Metadata({ data: "header, style=simple;explode=false;name=Content-Type" })
  contentType?: string;
}


export class EndpointCreatePlaylistRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=collaborative" })
  collaborative?: boolean;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=public" })
  public?: boolean;
}


export class EndpointCreatePlaylistSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  spotifyAuth: shared.SchemeSpotifyAuth;
}


export class EndpointCreatePlaylistRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: EndpointCreatePlaylistPathParams;

  @Metadata()
  headers: EndpointCreatePlaylistHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: EndpointCreatePlaylistRequestBody;

  @Metadata()
  security: EndpointCreatePlaylistSecurity;
}


export class EndpointCreatePlaylistResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponseObject?: shared.ErrorResponseObject;

  @Metadata()
  playlistObject?: shared.PlaylistObject;

  @Metadata()
  statusCode: number;
}
