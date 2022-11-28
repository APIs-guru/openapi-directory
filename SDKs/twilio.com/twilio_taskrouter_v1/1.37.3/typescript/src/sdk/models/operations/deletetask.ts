import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const DeleteTaskServerList = [
	"https://taskrouter.twilio.com",
] as const;


export class DeleteTaskPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=WorkspaceSid" })
  workspaceSid: string;
}


export class DeleteTaskHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=If-Match" })
  ifMatch?: string;
}


export class DeleteTaskSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class DeleteTaskRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: DeleteTaskPathParams;

  @SpeakeasyMetadata()
  headers: DeleteTaskHeaders;

  @SpeakeasyMetadata()
  security: DeleteTaskSecurity;
}


export class DeleteTaskResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
