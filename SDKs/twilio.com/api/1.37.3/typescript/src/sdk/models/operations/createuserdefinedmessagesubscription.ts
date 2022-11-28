import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const CreateUserDefinedMessageSubscriptionServerList = [
	"https://api.twilio.com",
] as const;


export class CreateUserDefinedMessageSubscriptionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" })
  accountSid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=CallSid" })
  callSid: string;
}

export enum CreateUserDefinedMessageSubscriptionCreateUserDefinedMessageSubscriptionRequestMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}


export class CreateUserDefinedMessageSubscriptionCreateUserDefinedMessageSubscriptionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=Callback;" })
  callback: string;

  @SpeakeasyMetadata({ data: "form, name=IdempotencyKey;" })
  idempotencyKey?: string;

  @SpeakeasyMetadata({ data: "form, name=Method;" })
  method: CreateUserDefinedMessageSubscriptionCreateUserDefinedMessageSubscriptionRequestMethodEnum;
}


export class CreateUserDefinedMessageSubscriptionSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateUserDefinedMessageSubscriptionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: CreateUserDefinedMessageSubscriptionPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateUserDefinedMessageSubscriptionCreateUserDefinedMessageSubscriptionRequest;

  @SpeakeasyMetadata()
  security: CreateUserDefinedMessageSubscriptionSecurity;
}


export class CreateUserDefinedMessageSubscriptionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  apiV2010AccountCallUserDefinedMessageSubscription?: shared.ApiV2010AccountCallUserDefinedMessageSubscription;
}
