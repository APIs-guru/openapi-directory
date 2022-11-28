import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const UpdateDeployedDevicesDeviceServerList = [
	"https://preview.twilio.com",
] as const;


export class UpdateDeployedDevicesDevicePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=FleetSid" })
  fleetSid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;
}


export class UpdateDeployedDevicesDeviceUpdateDeployedDevicesDeviceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=DeploymentSid;" })
  deploymentSid?: string;

  @SpeakeasyMetadata({ data: "form, name=Enabled;" })
  enabled?: boolean;

  @SpeakeasyMetadata({ data: "form, name=FriendlyName;" })
  friendlyName?: string;

  @SpeakeasyMetadata({ data: "form, name=Identity;" })
  identity?: string;
}


export class UpdateDeployedDevicesDeviceSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class UpdateDeployedDevicesDeviceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: UpdateDeployedDevicesDevicePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateDeployedDevicesDeviceUpdateDeployedDevicesDeviceRequest;

  @SpeakeasyMetadata()
  security: UpdateDeployedDevicesDeviceSecurity;
}


export class UpdateDeployedDevicesDeviceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  previewDeployedDevicesFleetDevice?: shared.PreviewDeployedDevicesFleetDevice;
}
