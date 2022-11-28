import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class EndpointCreatePlaylistPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=user_id" })
  userId: string;
}


export class EndpointCreatePlaylistHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Content-Type" })
  contentType?: string;
}


export class EndpointCreatePlaylistRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=collaborative" })
  collaborative?: boolean;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=public" })
  public?: boolean;
}


export class EndpointCreatePlaylistSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  spotifyAuth: shared.SchemeSpotifyAuth;
}


export class EndpointCreatePlaylistRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: EndpointCreatePlaylistPathParams;

  @SpeakeasyMetadata()
  headers: EndpointCreatePlaylistHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: EndpointCreatePlaylistRequestBody;

  @SpeakeasyMetadata()
  security: EndpointCreatePlaylistSecurity;
}


export class EndpointCreatePlaylistResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponseObject?: shared.ErrorResponseObject;

  @SpeakeasyMetadata()
  playlistObject?: shared.PlaylistObject;

  @SpeakeasyMetadata()
  statusCode: number;
}
