import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const CreateEngagementServerList = [
	"https://studio.twilio.com",
] as const;


export class CreateEngagementPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=FlowSid" })
  flowSid: string;
}


export class CreateEngagementCreateEngagementRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=From;" })
  from: string;

  @SpeakeasyMetadata({ data: "form, name=Parameters;" })
  parameters?: any;

  @SpeakeasyMetadata({ data: "form, name=To;" })
  to: string;
}


export class CreateEngagementSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateEngagementRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: CreateEngagementPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateEngagementCreateEngagementRequest;

  @SpeakeasyMetadata()
  security: CreateEngagementSecurity;
}


export class CreateEngagementResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  studioV1FlowEngagement?: shared.StudioV1FlowEngagement;
}
