import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const UPDATEFLOWVALIDATE_SERVERS = [
	"https://studio.twilio.com",
];



export class UpdateFlowValidateUpdateFlowValidateRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=CommitMessage;" })
  commitMessage?: string;

  @Metadata({ data: "form, name=Definition;" })
  definition: any;

  @Metadata({ data: "form, name=FriendlyName;" })
  friendlyName: string;

  @Metadata({ data: "form, name=Status;" })
  status: shared.FlowValidateEnumStatusEnum;
}


export class UpdateFlowValidateSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class UpdateFlowValidateRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateFlowValidateUpdateFlowValidateRequest;

  @Metadata()
  security: UpdateFlowValidateSecurity;
}


export class UpdateFlowValidateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  studioV2FlowValidate?: shared.StudioV2FlowValidate;
}
