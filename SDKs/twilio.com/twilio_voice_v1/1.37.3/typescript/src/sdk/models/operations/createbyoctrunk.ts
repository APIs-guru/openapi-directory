import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const CreateByocTrunkServerList = [
	"https://voice.twilio.com",
] as const;

export enum CreateByocTrunkCreateByocTrunkRequestStatusCallbackMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}

export enum CreateByocTrunkCreateByocTrunkRequestVoiceFallbackMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}

export enum CreateByocTrunkCreateByocTrunkRequestVoiceMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}


export class CreateByocTrunkCreateByocTrunkRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=CnamLookupEnabled;" })
  cnamLookupEnabled?: boolean;

  @SpeakeasyMetadata({ data: "form, name=ConnectionPolicySid;" })
  connectionPolicySid?: string;

  @SpeakeasyMetadata({ data: "form, name=FriendlyName;" })
  friendlyName?: string;

  @SpeakeasyMetadata({ data: "form, name=FromDomainSid;" })
  fromDomainSid?: string;

  @SpeakeasyMetadata({ data: "form, name=StatusCallbackMethod;" })
  statusCallbackMethod?: CreateByocTrunkCreateByocTrunkRequestStatusCallbackMethodEnum;

  @SpeakeasyMetadata({ data: "form, name=StatusCallbackUrl;" })
  statusCallbackUrl?: string;

  @SpeakeasyMetadata({ data: "form, name=VoiceFallbackMethod;" })
  voiceFallbackMethod?: CreateByocTrunkCreateByocTrunkRequestVoiceFallbackMethodEnum;

  @SpeakeasyMetadata({ data: "form, name=VoiceFallbackUrl;" })
  voiceFallbackUrl?: string;

  @SpeakeasyMetadata({ data: "form, name=VoiceMethod;" })
  voiceMethod?: CreateByocTrunkCreateByocTrunkRequestVoiceMethodEnum;

  @SpeakeasyMetadata({ data: "form, name=VoiceUrl;" })
  voiceUrl?: string;
}


export class CreateByocTrunkSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateByocTrunkRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateByocTrunkCreateByocTrunkRequest;

  @SpeakeasyMetadata()
  security: CreateByocTrunkSecurity;
}


export class CreateByocTrunkResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  voiceV1ByocTrunk?: shared.VoiceV1ByocTrunk;
}
