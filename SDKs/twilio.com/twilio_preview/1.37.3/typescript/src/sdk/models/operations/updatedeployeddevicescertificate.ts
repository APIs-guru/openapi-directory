import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const UpdateDeployedDevicesCertificateServerList = [
	"https://preview.twilio.com",
] as const;


export class UpdateDeployedDevicesCertificatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=FleetSid" })
  fleetSid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;
}


export class UpdateDeployedDevicesCertificateUpdateDeployedDevicesCertificateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=DeviceSid;" })
  deviceSid?: string;

  @SpeakeasyMetadata({ data: "form, name=FriendlyName;" })
  friendlyName?: string;
}


export class UpdateDeployedDevicesCertificateSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class UpdateDeployedDevicesCertificateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: UpdateDeployedDevicesCertificatePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateDeployedDevicesCertificateUpdateDeployedDevicesCertificateRequest;

  @SpeakeasyMetadata()
  security: UpdateDeployedDevicesCertificateSecurity;
}


export class UpdateDeployedDevicesCertificateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  previewDeployedDevicesFleetCertificate?: shared.PreviewDeployedDevicesFleetCertificate;
}
