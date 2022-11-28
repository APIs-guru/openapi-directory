import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const UpdateFlowServerList = [
	"https://studio.twilio.com",
] as const;


export class UpdateFlowPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;
}


export class UpdateFlowUpdateFlowRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=CommitMessage;" })
  commitMessage?: string;

  @SpeakeasyMetadata({ data: "form, name=Definition;" })
  definition?: any;

  @SpeakeasyMetadata({ data: "form, name=FriendlyName;" })
  friendlyName?: string;

  @SpeakeasyMetadata({ data: "form, name=Status;" })
  status: shared.FlowEnumStatusEnum;
}


export class UpdateFlowSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class UpdateFlowRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: UpdateFlowPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateFlowUpdateFlowRequest;

  @SpeakeasyMetadata()
  security: UpdateFlowSecurity;
}


export class UpdateFlowResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  studioV2Flow?: shared.StudioV2Flow;
}
