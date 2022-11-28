import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class EndpointGetAUsersAvailableDevicesHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class EndpointGetAUsersAvailableDevicesSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  spotifyAuth: shared.SchemeSpotifyAuth;
}


export class EndpointGetAUsersAvailableDevicesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: EndpointGetAUsersAvailableDevicesHeaders;

  @SpeakeasyMetadata()
  security: EndpointGetAUsersAvailableDevicesSecurity;
}


export class EndpointGetAUsersAvailableDevicesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  devicesObject?: shared.DevicesObject;

  @SpeakeasyMetadata()
  errorResponseObject?: shared.ErrorResponseObject;

  @SpeakeasyMetadata()
  statusCode: number;
}
