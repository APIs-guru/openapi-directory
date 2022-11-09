import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const UPDATEBYOCTRUNK_SERVERS = [
	"https://voice.twilio.com",
];



export class UpdateByocTrunkPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;
}

export enum UpdateByocTrunkUpdateByocTrunkRequestStatusCallbackMethodEnum {
    Head = "HEAD"
,    Get = "GET"
,    Post = "POST"
,    Patch = "PATCH"
,    Put = "PUT"
,    Delete = "DELETE"
}

export enum UpdateByocTrunkUpdateByocTrunkRequestVoiceFallbackMethodEnum {
    Head = "HEAD"
,    Get = "GET"
,    Post = "POST"
,    Patch = "PATCH"
,    Put = "PUT"
,    Delete = "DELETE"
}

export enum UpdateByocTrunkUpdateByocTrunkRequestVoiceMethodEnum {
    Head = "HEAD"
,    Get = "GET"
,    Post = "POST"
,    Patch = "PATCH"
,    Put = "PUT"
,    Delete = "DELETE"
}


export class UpdateByocTrunkUpdateByocTrunkRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=CnamLookupEnabled;" })
  cnamLookupEnabled?: boolean;

  @Metadata({ data: "form, name=ConnectionPolicySid;" })
  connectionPolicySid?: string;

  @Metadata({ data: "form, name=FriendlyName;" })
  friendlyName?: string;

  @Metadata({ data: "form, name=FromDomainSid;" })
  fromDomainSid?: string;

  @Metadata({ data: "form, name=StatusCallbackMethod;" })
  statusCallbackMethod?: UpdateByocTrunkUpdateByocTrunkRequestStatusCallbackMethodEnum;

  @Metadata({ data: "form, name=StatusCallbackUrl;" })
  statusCallbackUrl?: string;

  @Metadata({ data: "form, name=VoiceFallbackMethod;" })
  voiceFallbackMethod?: UpdateByocTrunkUpdateByocTrunkRequestVoiceFallbackMethodEnum;

  @Metadata({ data: "form, name=VoiceFallbackUrl;" })
  voiceFallbackUrl?: string;

  @Metadata({ data: "form, name=VoiceMethod;" })
  voiceMethod?: UpdateByocTrunkUpdateByocTrunkRequestVoiceMethodEnum;

  @Metadata({ data: "form, name=VoiceUrl;" })
  voiceUrl?: string;
}


export class UpdateByocTrunkSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class UpdateByocTrunkRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: UpdateByocTrunkPathParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateByocTrunkUpdateByocTrunkRequest;

  @Metadata()
  security: UpdateByocTrunkSecurity;
}


export class UpdateByocTrunkResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  voiceV1ByocTrunk?: shared.VoiceV1ByocTrunk;
}
