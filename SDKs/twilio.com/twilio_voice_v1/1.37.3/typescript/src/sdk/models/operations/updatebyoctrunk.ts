import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const UpdateByocTrunkServerList = [
	"https://voice.twilio.com",
] as const;


export class UpdateByocTrunkPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;
}

export enum UpdateByocTrunkUpdateByocTrunkRequestStatusCallbackMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}

export enum UpdateByocTrunkUpdateByocTrunkRequestVoiceFallbackMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}

export enum UpdateByocTrunkUpdateByocTrunkRequestVoiceMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}


export class UpdateByocTrunkUpdateByocTrunkRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=CnamLookupEnabled;" })
  cnamLookupEnabled?: boolean;

  @SpeakeasyMetadata({ data: "form, name=ConnectionPolicySid;" })
  connectionPolicySid?: string;

  @SpeakeasyMetadata({ data: "form, name=FriendlyName;" })
  friendlyName?: string;

  @SpeakeasyMetadata({ data: "form, name=FromDomainSid;" })
  fromDomainSid?: string;

  @SpeakeasyMetadata({ data: "form, name=StatusCallbackMethod;" })
  statusCallbackMethod?: UpdateByocTrunkUpdateByocTrunkRequestStatusCallbackMethodEnum;

  @SpeakeasyMetadata({ data: "form, name=StatusCallbackUrl;" })
  statusCallbackUrl?: string;

  @SpeakeasyMetadata({ data: "form, name=VoiceFallbackMethod;" })
  voiceFallbackMethod?: UpdateByocTrunkUpdateByocTrunkRequestVoiceFallbackMethodEnum;

  @SpeakeasyMetadata({ data: "form, name=VoiceFallbackUrl;" })
  voiceFallbackUrl?: string;

  @SpeakeasyMetadata({ data: "form, name=VoiceMethod;" })
  voiceMethod?: UpdateByocTrunkUpdateByocTrunkRequestVoiceMethodEnum;

  @SpeakeasyMetadata({ data: "form, name=VoiceUrl;" })
  voiceUrl?: string;
}


export class UpdateByocTrunkSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class UpdateByocTrunkRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: UpdateByocTrunkPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateByocTrunkUpdateByocTrunkRequest;

  @SpeakeasyMetadata()
  security: UpdateByocTrunkSecurity;
}


export class UpdateByocTrunkResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  voiceV1ByocTrunk?: shared.VoiceV1ByocTrunk;
}
