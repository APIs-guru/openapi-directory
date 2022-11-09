import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const UPDATEFLOW_SERVERS = [
	"https://studio.twilio.com",
];



export class UpdateFlowPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;
}


export class UpdateFlowUpdateFlowRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=CommitMessage;" })
  commitMessage?: string;

  @Metadata({ data: "form, name=Definition;" })
  definition?: any;

  @Metadata({ data: "form, name=FriendlyName;" })
  friendlyName?: string;

  @Metadata({ data: "form, name=Status;" })
  status: shared.FlowEnumStatusEnum;
}


export class UpdateFlowSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class UpdateFlowRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: UpdateFlowPathParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateFlowUpdateFlowRequest;

  @Metadata()
  security: UpdateFlowSecurity;
}


export class UpdateFlowResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  studioV2Flow?: shared.StudioV2Flow;
}
