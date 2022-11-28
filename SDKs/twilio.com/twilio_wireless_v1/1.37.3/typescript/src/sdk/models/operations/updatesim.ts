import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const UpdateSimServerList = [
	"https://wireless.twilio.com",
] as const;


export class UpdateSimPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;
}

export enum UpdateSimUpdateSimRequestCallbackMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}

export enum UpdateSimUpdateSimRequestCommandsCallbackMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}

export enum UpdateSimUpdateSimRequestSmsFallbackMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}

export enum UpdateSimUpdateSimRequestSmsMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}

export enum UpdateSimUpdateSimRequestVoiceFallbackMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}

export enum UpdateSimUpdateSimRequestVoiceMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}


export class UpdateSimUpdateSimRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=AccountSid;" })
  accountSid?: string;

  @SpeakeasyMetadata({ data: "form, name=CallbackMethod;" })
  callbackMethod?: UpdateSimUpdateSimRequestCallbackMethodEnum;

  @SpeakeasyMetadata({ data: "form, name=CallbackUrl;" })
  callbackUrl?: string;

  @SpeakeasyMetadata({ data: "form, name=CommandsCallbackMethod;" })
  commandsCallbackMethod?: UpdateSimUpdateSimRequestCommandsCallbackMethodEnum;

  @SpeakeasyMetadata({ data: "form, name=CommandsCallbackUrl;" })
  commandsCallbackUrl?: string;

  @SpeakeasyMetadata({ data: "form, name=FriendlyName;" })
  friendlyName?: string;

  @SpeakeasyMetadata({ data: "form, name=RatePlan;" })
  ratePlan?: string;

  @SpeakeasyMetadata({ data: "form, name=ResetStatus;" })
  resetStatus?: shared.SimEnumResetStatusEnum;

  @SpeakeasyMetadata({ data: "form, name=SmsFallbackMethod;" })
  smsFallbackMethod?: UpdateSimUpdateSimRequestSmsFallbackMethodEnum;

  @SpeakeasyMetadata({ data: "form, name=SmsFallbackUrl;" })
  smsFallbackUrl?: string;

  @SpeakeasyMetadata({ data: "form, name=SmsMethod;" })
  smsMethod?: UpdateSimUpdateSimRequestSmsMethodEnum;

  @SpeakeasyMetadata({ data: "form, name=SmsUrl;" })
  smsUrl?: string;

  @SpeakeasyMetadata({ data: "form, name=Status;" })
  status?: shared.SimEnumStatusEnum;

  @SpeakeasyMetadata({ data: "form, name=UniqueName;" })
  uniqueName?: string;

  @SpeakeasyMetadata({ data: "form, name=VoiceFallbackMethod;" })
  voiceFallbackMethod?: UpdateSimUpdateSimRequestVoiceFallbackMethodEnum;

  @SpeakeasyMetadata({ data: "form, name=VoiceFallbackUrl;" })
  voiceFallbackUrl?: string;

  @SpeakeasyMetadata({ data: "form, name=VoiceMethod;" })
  voiceMethod?: UpdateSimUpdateSimRequestVoiceMethodEnum;

  @SpeakeasyMetadata({ data: "form, name=VoiceUrl;" })
  voiceUrl?: string;
}


export class UpdateSimSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class UpdateSimRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: UpdateSimPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateSimUpdateSimRequest;

  @SpeakeasyMetadata()
  security: UpdateSimSecurity;
}


export class UpdateSimResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  wirelessV1Sim?: shared.WirelessV1Sim;
}
