import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const FETCHEXECUTIONSTEP_SERVERS = [
	"https://studio.twilio.com",
];



export class FetchExecutionStepPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ExecutionSid" })
  executionSid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=FlowSid" })
  flowSid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;
}


export class FetchExecutionStepSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class FetchExecutionStepRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: FetchExecutionStepPathParams;

  @Metadata()
  security: FetchExecutionStepSecurity;
}


export class FetchExecutionStepResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  studioV1FlowExecutionExecutionStep?: shared.StudioV1FlowExecutionExecutionStep;
}
