import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const DELETEDEPLOYEDDEVICESKEY_SERVERS = [
	"https://preview.twilio.com",
];



export class DeleteDeployedDevicesKeyPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=FleetSid" })
  fleetSid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;
}


export class DeleteDeployedDevicesKeySecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class DeleteDeployedDevicesKeyRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: DeleteDeployedDevicesKeyPathParams;

  @Metadata()
  security: DeleteDeployedDevicesKeySecurity;
}


export class DeleteDeployedDevicesKeyResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
