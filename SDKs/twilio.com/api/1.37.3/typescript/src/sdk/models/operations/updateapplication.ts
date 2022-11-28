import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const UpdateApplicationServerList = [
	"https://api.twilio.com",
] as const;


export class UpdateApplicationPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" })
  accountSid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;
}

export enum UpdateApplicationUpdateApplicationRequestSmsFallbackMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}

export enum UpdateApplicationUpdateApplicationRequestSmsMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}

export enum UpdateApplicationUpdateApplicationRequestStatusCallbackMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}

export enum UpdateApplicationUpdateApplicationRequestVoiceFallbackMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}

export enum UpdateApplicationUpdateApplicationRequestVoiceMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}


export class UpdateApplicationUpdateApplicationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=ApiVersion;" })
  apiVersion?: string;

  @SpeakeasyMetadata({ data: "form, name=FriendlyName;" })
  friendlyName?: string;

  @SpeakeasyMetadata({ data: "form, name=MessageStatusCallback;" })
  messageStatusCallback?: string;

  @SpeakeasyMetadata({ data: "form, name=SmsFallbackMethod;" })
  smsFallbackMethod?: UpdateApplicationUpdateApplicationRequestSmsFallbackMethodEnum;

  @SpeakeasyMetadata({ data: "form, name=SmsFallbackUrl;" })
  smsFallbackUrl?: string;

  @SpeakeasyMetadata({ data: "form, name=SmsMethod;" })
  smsMethod?: UpdateApplicationUpdateApplicationRequestSmsMethodEnum;

  @SpeakeasyMetadata({ data: "form, name=SmsStatusCallback;" })
  smsStatusCallback?: string;

  @SpeakeasyMetadata({ data: "form, name=SmsUrl;" })
  smsUrl?: string;

  @SpeakeasyMetadata({ data: "form, name=StatusCallback;" })
  statusCallback?: string;

  @SpeakeasyMetadata({ data: "form, name=StatusCallbackMethod;" })
  statusCallbackMethod?: UpdateApplicationUpdateApplicationRequestStatusCallbackMethodEnum;

  @SpeakeasyMetadata({ data: "form, name=VoiceCallerIdLookup;" })
  voiceCallerIdLookup?: boolean;

  @SpeakeasyMetadata({ data: "form, name=VoiceFallbackMethod;" })
  voiceFallbackMethod?: UpdateApplicationUpdateApplicationRequestVoiceFallbackMethodEnum;

  @SpeakeasyMetadata({ data: "form, name=VoiceFallbackUrl;" })
  voiceFallbackUrl?: string;

  @SpeakeasyMetadata({ data: "form, name=VoiceMethod;" })
  voiceMethod?: UpdateApplicationUpdateApplicationRequestVoiceMethodEnum;

  @SpeakeasyMetadata({ data: "form, name=VoiceUrl;" })
  voiceUrl?: string;
}


export class UpdateApplicationSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class UpdateApplicationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: UpdateApplicationPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateApplicationUpdateApplicationRequest;

  @SpeakeasyMetadata()
  security: UpdateApplicationSecurity;
}


export class UpdateApplicationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  apiV2010AccountApplication?: shared.ApiV2010AccountApplication;
}
