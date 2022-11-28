import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const UpdateExecutionServerList = [
	"https://studio.twilio.com",
] as const;


export class UpdateExecutionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=FlowSid" })
  flowSid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;
}


export class UpdateExecutionUpdateExecutionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=Status;" })
  status: shared.ExecutionEnumStatusEnum;
}


export class UpdateExecutionSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class UpdateExecutionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: UpdateExecutionPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateExecutionUpdateExecutionRequest;

  @SpeakeasyMetadata()
  security: UpdateExecutionSecurity;
}


export class UpdateExecutionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  studioV1FlowExecution?: shared.StudioV1FlowExecution;
}
