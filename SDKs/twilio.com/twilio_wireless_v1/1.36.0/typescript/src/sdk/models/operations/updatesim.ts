import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const UPDATESIM_SERVERS = [
	"https://wireless.twilio.com",
];



export class UpdateSimPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;
}

export enum UpdateSimUpdateSimRequestCallbackMethodEnum {
    Head = "HEAD"
,    Get = "GET"
,    Post = "POST"
,    Patch = "PATCH"
,    Put = "PUT"
,    Delete = "DELETE"
}

export enum UpdateSimUpdateSimRequestCommandsCallbackMethodEnum {
    Head = "HEAD"
,    Get = "GET"
,    Post = "POST"
,    Patch = "PATCH"
,    Put = "PUT"
,    Delete = "DELETE"
}

export enum UpdateSimUpdateSimRequestSmsFallbackMethodEnum {
    Head = "HEAD"
,    Get = "GET"
,    Post = "POST"
,    Patch = "PATCH"
,    Put = "PUT"
,    Delete = "DELETE"
}

export enum UpdateSimUpdateSimRequestSmsMethodEnum {
    Head = "HEAD"
,    Get = "GET"
,    Post = "POST"
,    Patch = "PATCH"
,    Put = "PUT"
,    Delete = "DELETE"
}

export enum UpdateSimUpdateSimRequestVoiceFallbackMethodEnum {
    Head = "HEAD"
,    Get = "GET"
,    Post = "POST"
,    Patch = "PATCH"
,    Put = "PUT"
,    Delete = "DELETE"
}

export enum UpdateSimUpdateSimRequestVoiceMethodEnum {
    Head = "HEAD"
,    Get = "GET"
,    Post = "POST"
,    Patch = "PATCH"
,    Put = "PUT"
,    Delete = "DELETE"
}


export class UpdateSimUpdateSimRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=AccountSid;" })
  accountSid?: string;

  @Metadata({ data: "form, name=CallbackMethod;" })
  callbackMethod?: UpdateSimUpdateSimRequestCallbackMethodEnum;

  @Metadata({ data: "form, name=CallbackUrl;" })
  callbackUrl?: string;

  @Metadata({ data: "form, name=CommandsCallbackMethod;" })
  commandsCallbackMethod?: UpdateSimUpdateSimRequestCommandsCallbackMethodEnum;

  @Metadata({ data: "form, name=CommandsCallbackUrl;" })
  commandsCallbackUrl?: string;

  @Metadata({ data: "form, name=FriendlyName;" })
  friendlyName?: string;

  @Metadata({ data: "form, name=RatePlan;" })
  ratePlan?: string;

  @Metadata({ data: "form, name=ResetStatus;" })
  resetStatus?: shared.SimEnumResetStatusEnum;

  @Metadata({ data: "form, name=SmsFallbackMethod;" })
  smsFallbackMethod?: UpdateSimUpdateSimRequestSmsFallbackMethodEnum;

  @Metadata({ data: "form, name=SmsFallbackUrl;" })
  smsFallbackUrl?: string;

  @Metadata({ data: "form, name=SmsMethod;" })
  smsMethod?: UpdateSimUpdateSimRequestSmsMethodEnum;

  @Metadata({ data: "form, name=SmsUrl;" })
  smsUrl?: string;

  @Metadata({ data: "form, name=Status;" })
  status?: shared.SimEnumStatusEnum;

  @Metadata({ data: "form, name=UniqueName;" })
  uniqueName?: string;

  @Metadata({ data: "form, name=VoiceFallbackMethod;" })
  voiceFallbackMethod?: UpdateSimUpdateSimRequestVoiceFallbackMethodEnum;

  @Metadata({ data: "form, name=VoiceFallbackUrl;" })
  voiceFallbackUrl?: string;

  @Metadata({ data: "form, name=VoiceMethod;" })
  voiceMethod?: UpdateSimUpdateSimRequestVoiceMethodEnum;

  @Metadata({ data: "form, name=VoiceUrl;" })
  voiceUrl?: string;
}


export class UpdateSimSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class UpdateSimRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: UpdateSimPathParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateSimUpdateSimRequest;

  @Metadata()
  security: UpdateSimSecurity;
}


export class UpdateSimResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  wirelessV1Sim?: shared.WirelessV1Sim;
}
