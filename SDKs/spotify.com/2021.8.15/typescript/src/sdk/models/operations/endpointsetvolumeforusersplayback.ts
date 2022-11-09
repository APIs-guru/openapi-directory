import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class EndpointSetVolumeForUsersPlaybackQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=device_id" })
  deviceId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=volume_percent" })
  volumePercent: number;
}


export class EndpointSetVolumeForUsersPlaybackHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class EndpointSetVolumeForUsersPlaybackSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  spotifyAuth: shared.SchemeSpotifyAuth;
}


export class EndpointSetVolumeForUsersPlaybackRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: EndpointSetVolumeForUsersPlaybackQueryParams;

  @Metadata()
  headers: EndpointSetVolumeForUsersPlaybackHeaders;

  @Metadata()
  security: EndpointSetVolumeForUsersPlaybackSecurity;
}


export class EndpointSetVolumeForUsersPlaybackResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponseObject?: shared.ErrorResponseObject;

  @Metadata()
  statusCode: number;
}
