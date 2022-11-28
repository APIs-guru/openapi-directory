import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class EndpointChangePlaylistDetailsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=playlist_id" })
  playlistId: string;
}


export class EndpointChangePlaylistDetailsHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Content-Type" })
  contentType: string;
}


export class EndpointChangePlaylistDetailsRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=collaborative" })
  collaborative?: boolean;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=public" })
  public?: boolean;
}


export class EndpointChangePlaylistDetailsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  spotifyAuth: shared.SchemeSpotifyAuth;
}


export class EndpointChangePlaylistDetailsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: EndpointChangePlaylistDetailsPathParams;

  @SpeakeasyMetadata()
  headers: EndpointChangePlaylistDetailsHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: EndpointChangePlaylistDetailsRequestBody;

  @SpeakeasyMetadata()
  security: EndpointChangePlaylistDetailsSecurity;
}


export class EndpointChangePlaylistDetailsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponseObject?: shared.ErrorResponseObject;

  @SpeakeasyMetadata()
  statusCode: number;
}
