import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const UpdateShortCodeServerList = [
	"https://api.twilio.com",
] as const;


export class UpdateShortCodePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" })
  accountSid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;
}

export enum UpdateShortCodeUpdateShortCodeRequestSmsFallbackMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}

export enum UpdateShortCodeUpdateShortCodeRequestSmsMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}


export class UpdateShortCodeUpdateShortCodeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=ApiVersion;" })
  apiVersion?: string;

  @SpeakeasyMetadata({ data: "form, name=FriendlyName;" })
  friendlyName?: string;

  @SpeakeasyMetadata({ data: "form, name=SmsFallbackMethod;" })
  smsFallbackMethod?: UpdateShortCodeUpdateShortCodeRequestSmsFallbackMethodEnum;

  @SpeakeasyMetadata({ data: "form, name=SmsFallbackUrl;" })
  smsFallbackUrl?: string;

  @SpeakeasyMetadata({ data: "form, name=SmsMethod;" })
  smsMethod?: UpdateShortCodeUpdateShortCodeRequestSmsMethodEnum;

  @SpeakeasyMetadata({ data: "form, name=SmsUrl;" })
  smsUrl?: string;
}


export class UpdateShortCodeSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class UpdateShortCodeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: UpdateShortCodePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateShortCodeUpdateShortCodeRequest;

  @SpeakeasyMetadata()
  security: UpdateShortCodeSecurity;
}


export class UpdateShortCodeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  apiV2010AccountShortCode?: shared.ApiV2010AccountShortCode;
}
