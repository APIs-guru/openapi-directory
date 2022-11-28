import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const DeleteExecutionServerList = [
	"https://studio.twilio.com",
] as const;


export class DeleteExecutionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=FlowSid" })
  flowSid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;
}


export class DeleteExecutionSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class DeleteExecutionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: DeleteExecutionPathParams;

  @SpeakeasyMetadata()
  security: DeleteExecutionSecurity;
}


export class DeleteExecutionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
