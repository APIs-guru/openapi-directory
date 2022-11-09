import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const CREATECONNECTIONPOLICY_SERVERS = [
	"https://voice.twilio.com",
];



export class CreateConnectionPolicyCreateConnectionPolicyRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=FriendlyName;" })
  friendlyName?: string;
}


export class CreateConnectionPolicySecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateConnectionPolicyRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateConnectionPolicyCreateConnectionPolicyRequest;

  @Metadata()
  security: CreateConnectionPolicySecurity;
}


export class CreateConnectionPolicyResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  voiceV1ConnectionPolicy?: shared.VoiceV1ConnectionPolicy;
}
