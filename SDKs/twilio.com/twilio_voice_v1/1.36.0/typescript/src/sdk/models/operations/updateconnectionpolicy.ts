import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const UPDATECONNECTIONPOLICY_SERVERS = [
	"https://voice.twilio.com",
];



export class UpdateConnectionPolicyPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;
}


export class UpdateConnectionPolicyUpdateConnectionPolicyRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=FriendlyName;" })
  friendlyName?: string;
}


export class UpdateConnectionPolicySecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class UpdateConnectionPolicyRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: UpdateConnectionPolicyPathParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateConnectionPolicyUpdateConnectionPolicyRequest;

  @Metadata()
  security: UpdateConnectionPolicySecurity;
}


export class UpdateConnectionPolicyResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  voiceV1ConnectionPolicy?: shared.VoiceV1ConnectionPolicy;
}
