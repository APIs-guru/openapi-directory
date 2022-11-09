import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const CREATEVALIDATIONREQUEST_SERVERS = [
	"https://api.twilio.com",
];



export class CreateValidationRequestPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" })
  accountSid: string;
}

export enum CreateValidationRequestCreateValidationRequestRequestStatusCallbackMethodEnum {
    Head = "HEAD"
,    Get = "GET"
,    Post = "POST"
,    Patch = "PATCH"
,    Put = "PUT"
,    Delete = "DELETE"
}


export class CreateValidationRequestCreateValidationRequestRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=CallDelay;" })
  callDelay?: number;

  @Metadata({ data: "form, name=Extension;" })
  extension?: string;

  @Metadata({ data: "form, name=FriendlyName;" })
  friendlyName?: string;

  @Metadata({ data: "form, name=PhoneNumber;" })
  phoneNumber: string;

  @Metadata({ data: "form, name=StatusCallback;" })
  statusCallback?: string;

  @Metadata({ data: "form, name=StatusCallbackMethod;" })
  statusCallbackMethod?: CreateValidationRequestCreateValidationRequestRequestStatusCallbackMethodEnum;
}


export class CreateValidationRequestSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateValidationRequestRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: CreateValidationRequestPathParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateValidationRequestCreateValidationRequestRequest;

  @Metadata()
  security: CreateValidationRequestSecurity;
}


export class CreateValidationRequestResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  apiV2010AccountValidationRequest?: shared.ApiV2010AccountValidationRequest;
}
