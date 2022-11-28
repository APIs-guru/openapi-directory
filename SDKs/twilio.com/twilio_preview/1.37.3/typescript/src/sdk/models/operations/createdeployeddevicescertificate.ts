import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const CreateDeployedDevicesCertificateServerList = [
	"https://preview.twilio.com",
] as const;


export class CreateDeployedDevicesCertificatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=FleetSid" })
  fleetSid: string;
}


export class CreateDeployedDevicesCertificateCreateDeployedDevicesCertificateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=CertificateData;" })
  certificateData: string;

  @SpeakeasyMetadata({ data: "form, name=DeviceSid;" })
  deviceSid?: string;

  @SpeakeasyMetadata({ data: "form, name=FriendlyName;" })
  friendlyName?: string;
}


export class CreateDeployedDevicesCertificateSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateDeployedDevicesCertificateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: CreateDeployedDevicesCertificatePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateDeployedDevicesCertificateCreateDeployedDevicesCertificateRequest;

  @SpeakeasyMetadata()
  security: CreateDeployedDevicesCertificateSecurity;
}


export class CreateDeployedDevicesCertificateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  previewDeployedDevicesFleetCertificate?: shared.PreviewDeployedDevicesFleetCertificate;
}
