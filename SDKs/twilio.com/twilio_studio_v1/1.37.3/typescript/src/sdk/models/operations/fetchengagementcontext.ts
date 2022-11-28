import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const FetchEngagementContextServerList = [
	"https://studio.twilio.com",
] as const;


export class FetchEngagementContextPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=EngagementSid" })
  engagementSid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=FlowSid" })
  flowSid: string;
}


export class FetchEngagementContextSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class FetchEngagementContextRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: FetchEngagementContextPathParams;

  @SpeakeasyMetadata()
  security: FetchEngagementContextSecurity;
}


export class FetchEngagementContextResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  studioV1FlowEngagementEngagementContext?: shared.StudioV1FlowEngagementEngagementContext;
}
