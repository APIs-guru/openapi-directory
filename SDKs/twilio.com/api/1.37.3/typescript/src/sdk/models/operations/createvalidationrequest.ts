import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const CreateValidationRequestServerList = [
	"https://api.twilio.com",
] as const;


export class CreateValidationRequestPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" })
  accountSid: string;
}

export enum CreateValidationRequestCreateValidationRequestRequestStatusCallbackMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}


export class CreateValidationRequestCreateValidationRequestRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=CallDelay;" })
  callDelay?: number;

  @SpeakeasyMetadata({ data: "form, name=Extension;" })
  extension?: string;

  @SpeakeasyMetadata({ data: "form, name=FriendlyName;" })
  friendlyName?: string;

  @SpeakeasyMetadata({ data: "form, name=PhoneNumber;" })
  phoneNumber: string;

  @SpeakeasyMetadata({ data: "form, name=StatusCallback;" })
  statusCallback?: string;

  @SpeakeasyMetadata({ data: "form, name=StatusCallbackMethod;" })
  statusCallbackMethod?: CreateValidationRequestCreateValidationRequestRequestStatusCallbackMethodEnum;
}


export class CreateValidationRequestSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateValidationRequestRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: CreateValidationRequestPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateValidationRequestCreateValidationRequestRequest;

  @SpeakeasyMetadata()
  security: CreateValidationRequestSecurity;
}


export class CreateValidationRequestResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  apiV2010AccountValidationRequest?: shared.ApiV2010AccountValidationRequest;
}
