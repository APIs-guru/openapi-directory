import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const CreateConnectionPolicyTargetServerList = [
	"https://voice.twilio.com",
] as const;


export class CreateConnectionPolicyTargetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ConnectionPolicySid" })
  connectionPolicySid: string;
}


export class CreateConnectionPolicyTargetCreateConnectionPolicyTargetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=Enabled;" })
  enabled?: boolean;

  @SpeakeasyMetadata({ data: "form, name=FriendlyName;" })
  friendlyName?: string;

  @SpeakeasyMetadata({ data: "form, name=Priority;" })
  priority?: number;

  @SpeakeasyMetadata({ data: "form, name=Target;" })
  target: string;

  @SpeakeasyMetadata({ data: "form, name=Weight;" })
  weight?: number;
}


export class CreateConnectionPolicyTargetSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateConnectionPolicyTargetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: CreateConnectionPolicyTargetPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateConnectionPolicyTargetCreateConnectionPolicyTargetRequest;

  @SpeakeasyMetadata()
  security: CreateConnectionPolicyTargetSecurity;
}


export class CreateConnectionPolicyTargetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  voiceV1ConnectionPolicyConnectionPolicyTarget?: shared.VoiceV1ConnectionPolicyConnectionPolicyTarget;
}
