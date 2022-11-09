import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const UPDATESHORTCODE_SERVERS = [
	"https://api.twilio.com",
];



export class UpdateShortCodePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" })
  accountSid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;
}

export enum UpdateShortCodeUpdateShortCodeRequestSmsFallbackMethodEnum {
    Head = "HEAD"
,    Get = "GET"
,    Post = "POST"
,    Patch = "PATCH"
,    Put = "PUT"
,    Delete = "DELETE"
}

export enum UpdateShortCodeUpdateShortCodeRequestSmsMethodEnum {
    Head = "HEAD"
,    Get = "GET"
,    Post = "POST"
,    Patch = "PATCH"
,    Put = "PUT"
,    Delete = "DELETE"
}


export class UpdateShortCodeUpdateShortCodeRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=ApiVersion;" })
  apiVersion?: string;

  @Metadata({ data: "form, name=FriendlyName;" })
  friendlyName?: string;

  @Metadata({ data: "form, name=SmsFallbackMethod;" })
  smsFallbackMethod?: UpdateShortCodeUpdateShortCodeRequestSmsFallbackMethodEnum;

  @Metadata({ data: "form, name=SmsFallbackUrl;" })
  smsFallbackUrl?: string;

  @Metadata({ data: "form, name=SmsMethod;" })
  smsMethod?: UpdateShortCodeUpdateShortCodeRequestSmsMethodEnum;

  @Metadata({ data: "form, name=SmsUrl;" })
  smsUrl?: string;
}


export class UpdateShortCodeSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class UpdateShortCodeRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: UpdateShortCodePathParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateShortCodeUpdateShortCodeRequest;

  @Metadata()
  security: UpdateShortCodeSecurity;
}


export class UpdateShortCodeResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  apiV2010AccountShortCode?: shared.ApiV2010AccountShortCode;
}
