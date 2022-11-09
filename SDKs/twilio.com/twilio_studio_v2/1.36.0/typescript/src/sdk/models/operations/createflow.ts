import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const CREATEFLOW_SERVERS = [
	"https://studio.twilio.com",
];



export class CreateFlowCreateFlowRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=CommitMessage;" })
  commitMessage?: string;

  @Metadata({ data: "form, name=Definition;" })
  definition: any;

  @Metadata({ data: "form, name=FriendlyName;" })
  friendlyName: string;

  @Metadata({ data: "form, name=Status;" })
  status: shared.FlowEnumStatusEnum;
}


export class CreateFlowSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateFlowRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateFlowCreateFlowRequest;

  @Metadata()
  security: CreateFlowSecurity;
}


export class CreateFlowResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  studioV2Flow?: shared.StudioV2Flow;
}
