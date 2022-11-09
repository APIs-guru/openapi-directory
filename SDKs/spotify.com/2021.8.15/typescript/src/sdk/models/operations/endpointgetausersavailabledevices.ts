import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class EndpointGetAUsersAvailableDevicesHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class EndpointGetAUsersAvailableDevicesSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  spotifyAuth: shared.SchemeSpotifyAuth;
}


export class EndpointGetAUsersAvailableDevicesRequest extends SpeakeasyBase {
  @Metadata()
  headers: EndpointGetAUsersAvailableDevicesHeaders;

  @Metadata()
  security: EndpointGetAUsersAvailableDevicesSecurity;
}


export class EndpointGetAUsersAvailableDevicesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  devicesObject?: shared.DevicesObject;

  @Metadata()
  errorResponseObject?: shared.ErrorResponseObject;

  @Metadata()
  statusCode: number;
}
