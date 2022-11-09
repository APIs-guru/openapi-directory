import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const UPDATEEXECUTION_SERVERS = [
	"https://studio.twilio.com",
];



export class UpdateExecutionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=FlowSid" })
  flowSid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;
}


export class UpdateExecutionUpdateExecutionRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=Status;" })
  status: shared.ExecutionEnumStatusEnum;
}


export class UpdateExecutionSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class UpdateExecutionRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: UpdateExecutionPathParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateExecutionUpdateExecutionRequest;

  @Metadata()
  security: UpdateExecutionSecurity;
}


export class UpdateExecutionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  studioV1FlowExecution?: shared.StudioV1FlowExecution;
}
