import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const CreateDeployedDevicesFleetServerList = [
	"https://preview.twilio.com",
] as const;


export class CreateDeployedDevicesFleetCreateDeployedDevicesFleetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=FriendlyName;" })
  friendlyName?: string;
}


export class CreateDeployedDevicesFleetSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateDeployedDevicesFleetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateDeployedDevicesFleetCreateDeployedDevicesFleetRequest;

  @SpeakeasyMetadata()
  security: CreateDeployedDevicesFleetSecurity;
}


export class CreateDeployedDevicesFleetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  previewDeployedDevicesFleet?: shared.PreviewDeployedDevicesFleet;
}
