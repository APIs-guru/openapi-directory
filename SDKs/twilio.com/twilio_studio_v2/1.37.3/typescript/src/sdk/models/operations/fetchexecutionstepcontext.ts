import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const FetchExecutionStepContextServerList = [
	"https://studio.twilio.com",
] as const;


export class FetchExecutionStepContextPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ExecutionSid" })
  executionSid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=FlowSid" })
  flowSid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=StepSid" })
  stepSid: string;
}


export class FetchExecutionStepContextSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class FetchExecutionStepContextRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: FetchExecutionStepContextPathParams;

  @SpeakeasyMetadata()
  security: FetchExecutionStepContextSecurity;
}


export class FetchExecutionStepContextResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  studioV2FlowExecutionExecutionStepExecutionStepContext?: shared.StudioV2FlowExecutionExecutionStepExecutionStepContext;
}
