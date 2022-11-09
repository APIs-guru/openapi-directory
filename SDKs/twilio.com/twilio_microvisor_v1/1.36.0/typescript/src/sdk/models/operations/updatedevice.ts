import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const UPDATEDEVICE_SERVERS = [
	"https://microvisor.twilio.com",
];



export class UpdateDevicePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;
}


export class UpdateDeviceUpdateDeviceRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=LoggingEnabled;" })
  loggingEnabled?: boolean;

  @Metadata({ data: "form, name=TargetApp;" })
  targetApp?: string;

  @Metadata({ data: "form, name=UniqueName;" })
  uniqueName?: string;
}


export class UpdateDeviceSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class UpdateDeviceRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: UpdateDevicePathParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateDeviceUpdateDeviceRequest;

  @Metadata()
  security: UpdateDeviceSecurity;
}


export class UpdateDeviceResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  microvisorV1Device?: shared.MicrovisorV1Device;
}
