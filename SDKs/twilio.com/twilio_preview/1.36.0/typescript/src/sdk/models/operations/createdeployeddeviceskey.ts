import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const CREATEDEPLOYEDDEVICESKEY_SERVERS = [
	"https://preview.twilio.com",
];



export class CreateDeployedDevicesKeyPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=FleetSid" })
  fleetSid: string;
}


export class CreateDeployedDevicesKeyCreateDeployedDevicesKeyRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=DeviceSid;" })
  deviceSid?: string;

  @Metadata({ data: "form, name=FriendlyName;" })
  friendlyName?: string;
}


export class CreateDeployedDevicesKeySecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateDeployedDevicesKeyRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: CreateDeployedDevicesKeyPathParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateDeployedDevicesKeyCreateDeployedDevicesKeyRequest;

  @Metadata()
  security: CreateDeployedDevicesKeySecurity;
}


export class CreateDeployedDevicesKeyResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  previewDeployedDevicesFleetKey?: shared.PreviewDeployedDevicesFleetKey;
}
