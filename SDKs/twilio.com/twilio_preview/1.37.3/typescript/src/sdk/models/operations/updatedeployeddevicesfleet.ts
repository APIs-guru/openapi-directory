import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const UpdateDeployedDevicesFleetServerList = [
	"https://preview.twilio.com",
] as const;


export class UpdateDeployedDevicesFleetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;
}


export class UpdateDeployedDevicesFleetUpdateDeployedDevicesFleetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=DefaultDeploymentSid;" })
  defaultDeploymentSid?: string;

  @SpeakeasyMetadata({ data: "form, name=FriendlyName;" })
  friendlyName?: string;
}


export class UpdateDeployedDevicesFleetSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class UpdateDeployedDevicesFleetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: UpdateDeployedDevicesFleetPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateDeployedDevicesFleetUpdateDeployedDevicesFleetRequest;

  @SpeakeasyMetadata()
  security: UpdateDeployedDevicesFleetSecurity;
}


export class UpdateDeployedDevicesFleetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  previewDeployedDevicesFleet?: shared.PreviewDeployedDevicesFleet;
}
