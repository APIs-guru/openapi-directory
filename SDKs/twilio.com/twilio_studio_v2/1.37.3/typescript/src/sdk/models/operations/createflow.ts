import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const CreateFlowServerList = [
	"https://studio.twilio.com",
] as const;


export class CreateFlowCreateFlowRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=CommitMessage;" })
  commitMessage?: string;

  @SpeakeasyMetadata({ data: "form, name=Definition;" })
  definition: any;

  @SpeakeasyMetadata({ data: "form, name=FriendlyName;" })
  friendlyName: string;

  @SpeakeasyMetadata({ data: "form, name=Status;" })
  status: shared.FlowEnumStatusEnum;
}


export class CreateFlowSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateFlowRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateFlowCreateFlowRequest;

  @SpeakeasyMetadata()
  security: CreateFlowSecurity;
}


export class CreateFlowResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  studioV2Flow?: shared.StudioV2Flow;
}
