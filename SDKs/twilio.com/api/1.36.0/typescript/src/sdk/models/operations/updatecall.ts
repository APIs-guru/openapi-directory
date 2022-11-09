import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const UPDATECALL_SERVERS = [
	"https://api.twilio.com",
];



export class UpdateCallPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" })
  accountSid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;
}

export enum UpdateCallUpdateCallRequestFallbackMethodEnum {
    Head = "HEAD"
,    Get = "GET"
,    Post = "POST"
,    Patch = "PATCH"
,    Put = "PUT"
,    Delete = "DELETE"
}

export enum UpdateCallUpdateCallRequestMethodEnum {
    Head = "HEAD"
,    Get = "GET"
,    Post = "POST"
,    Patch = "PATCH"
,    Put = "PUT"
,    Delete = "DELETE"
}

export enum UpdateCallUpdateCallRequestStatusCallbackMethodEnum {
    Head = "HEAD"
,    Get = "GET"
,    Post = "POST"
,    Patch = "PATCH"
,    Put = "PUT"
,    Delete = "DELETE"
}


export class UpdateCallUpdateCallRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=FallbackMethod;" })
  fallbackMethod?: UpdateCallUpdateCallRequestFallbackMethodEnum;

  @Metadata({ data: "form, name=FallbackUrl;" })
  fallbackUrl?: string;

  @Metadata({ data: "form, name=Method;" })
  method?: UpdateCallUpdateCallRequestMethodEnum;

  @Metadata({ data: "form, name=Status;" })
  status?: shared.CallEnumUpdateStatusEnum;

  @Metadata({ data: "form, name=StatusCallback;" })
  statusCallback?: string;

  @Metadata({ data: "form, name=StatusCallbackMethod;" })
  statusCallbackMethod?: UpdateCallUpdateCallRequestStatusCallbackMethodEnum;

  @Metadata({ data: "form, name=TimeLimit;" })
  timeLimit?: number;

  @Metadata({ data: "form, name=Twiml;" })
  twiml?: string;

  @Metadata({ data: "form, name=Url;" })
  url?: string;
}


export class UpdateCallSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class UpdateCallRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: UpdateCallPathParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateCallUpdateCallRequest;

  @Metadata()
  security: UpdateCallSecurity;
}


export class UpdateCallResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  apiV2010AccountCall?: shared.ApiV2010AccountCall;
}
