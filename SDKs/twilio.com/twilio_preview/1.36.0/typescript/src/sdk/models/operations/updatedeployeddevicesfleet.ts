import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const UPDATEDEPLOYEDDEVICESFLEET_SERVERS = [
	"https://preview.twilio.com",
];



export class UpdateDeployedDevicesFleetPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;
}


export class UpdateDeployedDevicesFleetUpdateDeployedDevicesFleetRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=DefaultDeploymentSid;" })
  defaultDeploymentSid?: string;

  @Metadata({ data: "form, name=FriendlyName;" })
  friendlyName?: string;
}


export class UpdateDeployedDevicesFleetSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class UpdateDeployedDevicesFleetRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: UpdateDeployedDevicesFleetPathParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateDeployedDevicesFleetUpdateDeployedDevicesFleetRequest;

  @Metadata()
  security: UpdateDeployedDevicesFleetSecurity;
}


export class UpdateDeployedDevicesFleetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  previewDeployedDevicesFleet?: shared.PreviewDeployedDevicesFleet;
}
