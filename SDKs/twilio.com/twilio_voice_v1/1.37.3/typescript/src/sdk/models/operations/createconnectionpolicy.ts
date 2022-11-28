import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const CreateConnectionPolicyServerList = [
	"https://voice.twilio.com",
] as const;


export class CreateConnectionPolicyCreateConnectionPolicyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=FriendlyName;" })
  friendlyName?: string;
}


export class CreateConnectionPolicySecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateConnectionPolicyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateConnectionPolicyCreateConnectionPolicyRequest;

  @SpeakeasyMetadata()
  security: CreateConnectionPolicySecurity;
}


export class CreateConnectionPolicyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  voiceV1ConnectionPolicy?: shared.VoiceV1ConnectionPolicy;
}
