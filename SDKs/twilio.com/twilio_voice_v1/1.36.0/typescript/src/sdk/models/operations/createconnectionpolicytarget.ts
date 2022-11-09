import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const CREATECONNECTIONPOLICYTARGET_SERVERS = [
	"https://voice.twilio.com",
];



export class CreateConnectionPolicyTargetPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ConnectionPolicySid" })
  connectionPolicySid: string;
}


export class CreateConnectionPolicyTargetCreateConnectionPolicyTargetRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=Enabled;" })
  enabled?: boolean;

  @Metadata({ data: "form, name=FriendlyName;" })
  friendlyName?: string;

  @Metadata({ data: "form, name=Priority;" })
  priority?: number;

  @Metadata({ data: "form, name=Target;" })
  target: string;

  @Metadata({ data: "form, name=Weight;" })
  weight?: number;
}


export class CreateConnectionPolicyTargetSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateConnectionPolicyTargetRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: CreateConnectionPolicyTargetPathParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateConnectionPolicyTargetCreateConnectionPolicyTargetRequest;

  @Metadata()
  security: CreateConnectionPolicyTargetSecurity;
}


export class CreateConnectionPolicyTargetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  voiceV1ConnectionPolicyConnectionPolicyTarget?: shared.VoiceV1ConnectionPolicyConnectionPolicyTarget;
}
