import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const UpdateDeployedDevicesKeyServerList = [
	"https://preview.twilio.com",
] as const;


export class UpdateDeployedDevicesKeyPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=FleetSid" })
  fleetSid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;
}


export class UpdateDeployedDevicesKeyUpdateDeployedDevicesKeyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=DeviceSid;" })
  deviceSid?: string;

  @SpeakeasyMetadata({ data: "form, name=FriendlyName;" })
  friendlyName?: string;
}


export class UpdateDeployedDevicesKeySecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class UpdateDeployedDevicesKeyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: UpdateDeployedDevicesKeyPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateDeployedDevicesKeyUpdateDeployedDevicesKeyRequest;

  @SpeakeasyMetadata()
  security: UpdateDeployedDevicesKeySecurity;
}


export class UpdateDeployedDevicesKeyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  previewDeployedDevicesFleetKey?: shared.PreviewDeployedDevicesFleetKey;
}
