import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const DeleteKeyServerList = [
	"https://api.twilio.com",
] as const;


export class DeleteKeyPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" })
  accountSid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;
}


export class DeleteKeySecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class DeleteKeyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: DeleteKeyPathParams;

  @SpeakeasyMetadata()
  security: DeleteKeySecurity;
}


export class DeleteKeyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
