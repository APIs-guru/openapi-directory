import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const CREATEDEPLOYEDDEVICESFLEET_SERVERS = [
	"https://preview.twilio.com",
];



export class CreateDeployedDevicesFleetCreateDeployedDevicesFleetRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=FriendlyName;" })
  friendlyName?: string;
}


export class CreateDeployedDevicesFleetSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateDeployedDevicesFleetRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateDeployedDevicesFleetCreateDeployedDevicesFleetRequest;

  @Metadata()
  security: CreateDeployedDevicesFleetSecurity;
}


export class CreateDeployedDevicesFleetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  previewDeployedDevicesFleet?: shared.PreviewDeployedDevicesFleet;
}
