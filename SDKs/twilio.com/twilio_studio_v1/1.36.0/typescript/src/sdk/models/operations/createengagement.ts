import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const CREATEENGAGEMENT_SERVERS = [
	"https://studio.twilio.com",
];



export class CreateEngagementPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=FlowSid" })
  flowSid: string;
}


export class CreateEngagementCreateEngagementRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=From;" })
  from: string;

  @Metadata({ data: "form, name=Parameters;" })
  parameters?: any;

  @Metadata({ data: "form, name=To;" })
  to: string;
}


export class CreateEngagementSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateEngagementRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: CreateEngagementPathParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateEngagementCreateEngagementRequest;

  @Metadata()
  security: CreateEngagementSecurity;
}


export class CreateEngagementResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  studioV1FlowEngagement?: shared.StudioV1FlowEngagement;
}
