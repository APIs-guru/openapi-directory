import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const FETCHSTEPCONTEXT_SERVERS = [
	"https://studio.twilio.com",
];



export class FetchStepContextPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=EngagementSid" })
  engagementSid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=FlowSid" })
  flowSid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=StepSid" })
  stepSid: string;
}


export class FetchStepContextSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class FetchStepContextRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: FetchStepContextPathParams;

  @Metadata()
  security: FetchStepContextSecurity;
}


export class FetchStepContextResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  studioV1FlowEngagementStepStepContext?: shared.StudioV1FlowEngagementStepStepContext;
}
