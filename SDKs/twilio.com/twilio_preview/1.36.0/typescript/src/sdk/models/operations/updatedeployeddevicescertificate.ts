import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const UPDATEDEPLOYEDDEVICESCERTIFICATE_SERVERS = [
	"https://preview.twilio.com",
];



export class UpdateDeployedDevicesCertificatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=FleetSid" })
  fleetSid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;
}


export class UpdateDeployedDevicesCertificateUpdateDeployedDevicesCertificateRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=DeviceSid;" })
  deviceSid?: string;

  @Metadata({ data: "form, name=FriendlyName;" })
  friendlyName?: string;
}


export class UpdateDeployedDevicesCertificateSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class UpdateDeployedDevicesCertificateRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: UpdateDeployedDevicesCertificatePathParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateDeployedDevicesCertificateUpdateDeployedDevicesCertificateRequest;

  @Metadata()
  security: UpdateDeployedDevicesCertificateSecurity;
}


export class UpdateDeployedDevicesCertificateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  previewDeployedDevicesFleetCertificate?: shared.PreviewDeployedDevicesFleetCertificate;
}
