import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const FetchDeployedDevicesFleetServerList = [
	"https://preview.twilio.com",
] as const;


export class FetchDeployedDevicesFleetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;
}


export class FetchDeployedDevicesFleetSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class FetchDeployedDevicesFleetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: FetchDeployedDevicesFleetPathParams;

  @SpeakeasyMetadata()
  security: FetchDeployedDevicesFleetSecurity;
}


export class FetchDeployedDevicesFleetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  previewDeployedDevicesFleet?: shared.PreviewDeployedDevicesFleet;
}
