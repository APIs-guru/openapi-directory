import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const CreateUserDefinedMessageSubscriptionServerList: readonly ["https://api.twilio.com"];
export declare class CreateUserDefinedMessageSubscriptionPathParams extends SpeakeasyBase {
    accountSid: string;
    callSid: string;
}
export declare enum CreateUserDefinedMessageSubscriptionCreateUserDefinedMessageSubscriptionRequestMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
export declare class CreateUserDefinedMessageSubscriptionCreateUserDefinedMessageSubscriptionRequest extends SpeakeasyBase {
    callback: string;
    idempotencyKey?: string;
    method: CreateUserDefinedMessageSubscriptionCreateUserDefinedMessageSubscriptionRequestMethodEnum;
}
export declare class CreateUserDefinedMessageSubscriptionSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class CreateUserDefinedMessageSubscriptionRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: CreateUserDefinedMessageSubscriptionPathParams;
    request?: CreateUserDefinedMessageSubscriptionCreateUserDefinedMessageSubscriptionRequest;
    security: CreateUserDefinedMessageSubscriptionSecurity;
}
export declare class CreateUserDefinedMessageSubscriptionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    apiV2010AccountCallUserDefinedMessageSubscription?: shared.ApiV2010AccountCallUserDefinedMessageSubscription;
}
