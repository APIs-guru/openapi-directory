import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const CREATEDEPLOYEDDEVICESCERTIFICATE_SERVERS = [
	"https://preview.twilio.com",
];



export class CreateDeployedDevicesCertificatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=FleetSid" })
  fleetSid: string;
}


export class CreateDeployedDevicesCertificateCreateDeployedDevicesCertificateRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=CertificateData;" })
  certificateData: string;

  @Metadata({ data: "form, name=DeviceSid;" })
  deviceSid?: string;

  @Metadata({ data: "form, name=FriendlyName;" })
  friendlyName?: string;
}


export class CreateDeployedDevicesCertificateSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateDeployedDevicesCertificateRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: CreateDeployedDevicesCertificatePathParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateDeployedDevicesCertificateCreateDeployedDevicesCertificateRequest;

  @Metadata()
  security: CreateDeployedDevicesCertificateSecurity;
}


export class CreateDeployedDevicesCertificateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  previewDeployedDevicesFleetCertificate?: shared.PreviewDeployedDevicesFleetCertificate;
}
