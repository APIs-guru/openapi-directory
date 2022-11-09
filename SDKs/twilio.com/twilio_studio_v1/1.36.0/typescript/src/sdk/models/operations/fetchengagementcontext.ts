import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const FETCHENGAGEMENTCONTEXT_SERVERS = [
	"https://studio.twilio.com",
];



export class FetchEngagementContextPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=EngagementSid" })
  engagementSid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=FlowSid" })
  flowSid: string;
}


export class FetchEngagementContextSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class FetchEngagementContextRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: FetchEngagementContextPathParams;

  @Metadata()
  security: FetchEngagementContextSecurity;
}


export class FetchEngagementContextResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  studioV1FlowEngagementEngagementContext?: shared.StudioV1FlowEngagementEngagementContext;
}
