import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const CreateDeployedDevicesDeploymentServerList = [
	"https://preview.twilio.com",
] as const;


export class CreateDeployedDevicesDeploymentPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=FleetSid" })
  fleetSid: string;
}


export class CreateDeployedDevicesDeploymentCreateDeployedDevicesDeploymentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=FriendlyName;" })
  friendlyName?: string;

  @SpeakeasyMetadata({ data: "form, name=SyncServiceSid;" })
  syncServiceSid?: string;
}


export class CreateDeployedDevicesDeploymentSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateDeployedDevicesDeploymentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: CreateDeployedDevicesDeploymentPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateDeployedDevicesDeploymentCreateDeployedDevicesDeploymentRequest;

  @SpeakeasyMetadata()
  security: CreateDeployedDevicesDeploymentSecurity;
}


export class CreateDeployedDevicesDeploymentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  previewDeployedDevicesFleetDeployment?: shared.PreviewDeployedDevicesFleetDeployment;
}
