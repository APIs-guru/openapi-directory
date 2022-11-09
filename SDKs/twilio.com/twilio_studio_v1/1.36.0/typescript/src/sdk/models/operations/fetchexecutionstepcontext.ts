import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const FETCHEXECUTIONSTEPCONTEXT_SERVERS = [
	"https://studio.twilio.com",
];



export class FetchExecutionStepContextPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ExecutionSid" })
  executionSid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=FlowSid" })
  flowSid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=StepSid" })
  stepSid: string;
}


export class FetchExecutionStepContextSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class FetchExecutionStepContextRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: FetchExecutionStepContextPathParams;

  @Metadata()
  security: FetchExecutionStepContextSecurity;
}


export class FetchExecutionStepContextResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  studioV1FlowExecutionExecutionStepExecutionStepContext?: shared.StudioV1FlowExecutionExecutionStepExecutionStepContext;
}
