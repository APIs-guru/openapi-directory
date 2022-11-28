import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const CreateDeployedDevicesDeviceServerList = [
	"https://preview.twilio.com",
] as const;


export class CreateDeployedDevicesDevicePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=FleetSid" })
  fleetSid: string;
}


export class CreateDeployedDevicesDeviceCreateDeployedDevicesDeviceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=DeploymentSid;" })
  deploymentSid?: string;

  @SpeakeasyMetadata({ data: "form, name=Enabled;" })
  enabled?: boolean;

  @SpeakeasyMetadata({ data: "form, name=FriendlyName;" })
  friendlyName?: string;

  @SpeakeasyMetadata({ data: "form, name=Identity;" })
  identity?: string;

  @SpeakeasyMetadata({ data: "form, name=UniqueName;" })
  uniqueName?: string;
}


export class CreateDeployedDevicesDeviceSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateDeployedDevicesDeviceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: CreateDeployedDevicesDevicePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateDeployedDevicesDeviceCreateDeployedDevicesDeviceRequest;

  @SpeakeasyMetadata()
  security: CreateDeployedDevicesDeviceSecurity;
}


export class CreateDeployedDevicesDeviceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  previewDeployedDevicesFleetDevice?: shared.PreviewDeployedDevicesFleetDevice;
}
