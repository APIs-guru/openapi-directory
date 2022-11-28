import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class EndpointGetTrackPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class EndpointGetTrackQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=market" })
  market?: string;
}


export class EndpointGetTrackHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class EndpointGetTrackSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  spotifyAuth: shared.SchemeSpotifyAuth;
}


export class EndpointGetTrackRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: EndpointGetTrackPathParams;

  @SpeakeasyMetadata()
  queryParams: EndpointGetTrackQueryParams;

  @SpeakeasyMetadata()
  headers: EndpointGetTrackHeaders;

  @SpeakeasyMetadata()
  security: EndpointGetTrackSecurity;
}


export class EndpointGetTrackResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponseObject?: shared.ErrorResponseObject;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  trackObject?: shared.TrackObject;
}
