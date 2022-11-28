import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const UpdateDeployedDevicesDeploymentServerList = [
	"https://preview.twilio.com",
] as const;


export class UpdateDeployedDevicesDeploymentPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=FleetSid" })
  fleetSid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;
}


export class UpdateDeployedDevicesDeploymentUpdateDeployedDevicesDeploymentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=FriendlyName;" })
  friendlyName?: string;

  @SpeakeasyMetadata({ data: "form, name=SyncServiceSid;" })
  syncServiceSid?: string;
}


export class UpdateDeployedDevicesDeploymentSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class UpdateDeployedDevicesDeploymentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: UpdateDeployedDevicesDeploymentPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateDeployedDevicesDeploymentUpdateDeployedDevicesDeploymentRequest;

  @SpeakeasyMetadata()
  security: UpdateDeployedDevicesDeploymentSecurity;
}


export class UpdateDeployedDevicesDeploymentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  previewDeployedDevicesFleetDeployment?: shared.PreviewDeployedDevicesFleetDeployment;
}
