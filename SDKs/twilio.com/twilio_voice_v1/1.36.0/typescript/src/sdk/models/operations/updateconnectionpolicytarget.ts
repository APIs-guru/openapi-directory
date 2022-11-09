import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const UPDATECONNECTIONPOLICYTARGET_SERVERS = [
	"https://voice.twilio.com",
];



export class UpdateConnectionPolicyTargetPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ConnectionPolicySid" })
  connectionPolicySid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;
}


export class UpdateConnectionPolicyTargetUpdateConnectionPolicyTargetRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=Enabled;" })
  enabled?: boolean;

  @Metadata({ data: "form, name=FriendlyName;" })
  friendlyName?: string;

  @Metadata({ data: "form, name=Priority;" })
  priority?: number;

  @Metadata({ data: "form, name=Target;" })
  target?: string;

  @Metadata({ data: "form, name=Weight;" })
  weight?: number;
}


export class UpdateConnectionPolicyTargetSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class UpdateConnectionPolicyTargetRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: UpdateConnectionPolicyTargetPathParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateConnectionPolicyTargetUpdateConnectionPolicyTargetRequest;

  @Metadata()
  security: UpdateConnectionPolicyTargetSecurity;
}


export class UpdateConnectionPolicyTargetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  voiceV1ConnectionPolicyConnectionPolicyTarget?: shared.VoiceV1ConnectionPolicyConnectionPolicyTarget;
}
