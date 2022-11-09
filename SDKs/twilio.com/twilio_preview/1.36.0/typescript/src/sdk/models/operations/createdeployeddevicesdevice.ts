import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const CREATEDEPLOYEDDEVICESDEVICE_SERVERS = [
	"https://preview.twilio.com",
];



export class CreateDeployedDevicesDevicePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=FleetSid" })
  fleetSid: string;
}


export class CreateDeployedDevicesDeviceCreateDeployedDevicesDeviceRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=DeploymentSid;" })
  deploymentSid?: string;

  @Metadata({ data: "form, name=Enabled;" })
  enabled?: boolean;

  @Metadata({ data: "form, name=FriendlyName;" })
  friendlyName?: string;

  @Metadata({ data: "form, name=Identity;" })
  identity?: string;

  @Metadata({ data: "form, name=UniqueName;" })
  uniqueName?: string;
}


export class CreateDeployedDevicesDeviceSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateDeployedDevicesDeviceRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: CreateDeployedDevicesDevicePathParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateDeployedDevicesDeviceCreateDeployedDevicesDeviceRequest;

  @Metadata()
  security: CreateDeployedDevicesDeviceSecurity;
}


export class CreateDeployedDevicesDeviceResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  previewDeployedDevicesFleetDevice?: shared.PreviewDeployedDevicesFleetDevice;
}
