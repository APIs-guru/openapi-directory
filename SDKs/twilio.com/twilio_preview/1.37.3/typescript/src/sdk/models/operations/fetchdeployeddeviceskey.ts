import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const FetchDeployedDevicesKeyServerList = [
	"https://preview.twilio.com",
] as const;


export class FetchDeployedDevicesKeyPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=FleetSid" })
  fleetSid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;
}


export class FetchDeployedDevicesKeySecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class FetchDeployedDevicesKeyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: FetchDeployedDevicesKeyPathParams;

  @SpeakeasyMetadata()
  security: FetchDeployedDevicesKeySecurity;
}


export class FetchDeployedDevicesKeyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  previewDeployedDevicesFleetKey?: shared.PreviewDeployedDevicesFleetKey;
}
