import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const UpdateFlowValidateServerList = [
	"https://studio.twilio.com",
] as const;


export class UpdateFlowValidateUpdateFlowValidateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=CommitMessage;" })
  commitMessage?: string;

  @SpeakeasyMetadata({ data: "form, name=Definition;" })
  definition: any;

  @SpeakeasyMetadata({ data: "form, name=FriendlyName;" })
  friendlyName: string;

  @SpeakeasyMetadata({ data: "form, name=Status;" })
  status: shared.FlowValidateEnumStatusEnum;
}


export class UpdateFlowValidateSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class UpdateFlowValidateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateFlowValidateUpdateFlowValidateRequest;

  @SpeakeasyMetadata()
  security: UpdateFlowValidateSecurity;
}


export class UpdateFlowValidateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  studioV2FlowValidate?: shared.StudioV2FlowValidate;
}
