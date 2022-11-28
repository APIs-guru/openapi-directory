import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const UpdateDeviceServerList = [
	"https://microvisor.twilio.com",
] as const;


export class UpdateDevicePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;
}


export class UpdateDeviceUpdateDeviceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=LoggingEnabled;" })
  loggingEnabled?: boolean;

  @SpeakeasyMetadata({ data: "form, name=TargetApp;" })
  targetApp?: string;

  @SpeakeasyMetadata({ data: "form, name=UniqueName;" })
  uniqueName?: string;
}


export class UpdateDeviceSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class UpdateDeviceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: UpdateDevicePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateDeviceUpdateDeviceRequest;

  @SpeakeasyMetadata()
  security: UpdateDeviceSecurity;
}


export class UpdateDeviceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  microvisorV1Device?: shared.MicrovisorV1Device;
}
