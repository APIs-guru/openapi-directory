import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const UpdateCallServerList = [
	"https://api.twilio.com",
] as const;


export class UpdateCallPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" })
  accountSid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;
}

export enum UpdateCallUpdateCallRequestFallbackMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}

export enum UpdateCallUpdateCallRequestMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}

export enum UpdateCallUpdateCallRequestStatusCallbackMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}


export class UpdateCallUpdateCallRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=FallbackMethod;" })
  fallbackMethod?: UpdateCallUpdateCallRequestFallbackMethodEnum;

  @SpeakeasyMetadata({ data: "form, name=FallbackUrl;" })
  fallbackUrl?: string;

  @SpeakeasyMetadata({ data: "form, name=Method;" })
  method?: UpdateCallUpdateCallRequestMethodEnum;

  @SpeakeasyMetadata({ data: "form, name=Status;" })
  status?: shared.CallEnumUpdateStatusEnum;

  @SpeakeasyMetadata({ data: "form, name=StatusCallback;" })
  statusCallback?: string;

  @SpeakeasyMetadata({ data: "form, name=StatusCallbackMethod;" })
  statusCallbackMethod?: UpdateCallUpdateCallRequestStatusCallbackMethodEnum;

  @SpeakeasyMetadata({ data: "form, name=TimeLimit;" })
  timeLimit?: number;

  @SpeakeasyMetadata({ data: "form, name=Twiml;" })
  twiml?: string;

  @SpeakeasyMetadata({ data: "form, name=Url;" })
  url?: string;
}


export class UpdateCallSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class UpdateCallRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: UpdateCallPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateCallUpdateCallRequest;

  @SpeakeasyMetadata()
  security: UpdateCallSecurity;
}


export class UpdateCallResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  apiV2010AccountCall?: shared.ApiV2010AccountCall;
}
