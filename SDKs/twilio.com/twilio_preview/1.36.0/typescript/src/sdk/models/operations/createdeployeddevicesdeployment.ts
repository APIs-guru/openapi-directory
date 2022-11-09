import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const CREATEDEPLOYEDDEVICESDEPLOYMENT_SERVERS = [
	"https://preview.twilio.com",
];



export class CreateDeployedDevicesDeploymentPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=FleetSid" })
  fleetSid: string;
}


export class CreateDeployedDevicesDeploymentCreateDeployedDevicesDeploymentRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=FriendlyName;" })
  friendlyName?: string;

  @Metadata({ data: "form, name=SyncServiceSid;" })
  syncServiceSid?: string;
}


export class CreateDeployedDevicesDeploymentSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateDeployedDevicesDeploymentRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: CreateDeployedDevicesDeploymentPathParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateDeployedDevicesDeploymentCreateDeployedDevicesDeploymentRequest;

  @Metadata()
  security: CreateDeployedDevicesDeploymentSecurity;
}


export class CreateDeployedDevicesDeploymentResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  previewDeployedDevicesFleetDeployment?: shared.PreviewDeployedDevicesFleetDeployment;
}
