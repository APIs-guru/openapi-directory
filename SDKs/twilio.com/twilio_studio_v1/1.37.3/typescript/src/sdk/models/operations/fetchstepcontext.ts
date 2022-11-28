import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const FetchStepContextServerList = [
	"https://studio.twilio.com",
] as const;


export class FetchStepContextPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=EngagementSid" })
  engagementSid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=FlowSid" })
  flowSid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=StepSid" })
  stepSid: string;
}


export class FetchStepContextSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class FetchStepContextRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: FetchStepContextPathParams;

  @SpeakeasyMetadata()
  security: FetchStepContextSecurity;
}


export class FetchStepContextResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  studioV1FlowEngagementStepStepContext?: shared.StudioV1FlowEngagementStepStepContext;
}
