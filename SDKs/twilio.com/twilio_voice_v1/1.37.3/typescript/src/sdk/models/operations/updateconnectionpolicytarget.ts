import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const UpdateConnectionPolicyTargetServerList = [
	"https://voice.twilio.com",
] as const;


export class UpdateConnectionPolicyTargetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ConnectionPolicySid" })
  connectionPolicySid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;
}


export class UpdateConnectionPolicyTargetUpdateConnectionPolicyTargetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=Enabled;" })
  enabled?: boolean;

  @SpeakeasyMetadata({ data: "form, name=FriendlyName;" })
  friendlyName?: string;

  @SpeakeasyMetadata({ data: "form, name=Priority;" })
  priority?: number;

  @SpeakeasyMetadata({ data: "form, name=Target;" })
  target?: string;

  @SpeakeasyMetadata({ data: "form, name=Weight;" })
  weight?: number;
}


export class UpdateConnectionPolicyTargetSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class UpdateConnectionPolicyTargetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: UpdateConnectionPolicyTargetPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateConnectionPolicyTargetUpdateConnectionPolicyTargetRequest;

  @SpeakeasyMetadata()
  security: UpdateConnectionPolicyTargetSecurity;
}


export class UpdateConnectionPolicyTargetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  voiceV1ConnectionPolicyConnectionPolicyTarget?: shared.VoiceV1ConnectionPolicyConnectionPolicyTarget;
}
