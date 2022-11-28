import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const CreateUserDefinedMessageServerList: readonly ["https://api.twilio.com"];
export declare class CreateUserDefinedMessagePathParams extends SpeakeasyBase {
    accountSid: string;
    callSid: string;
}
export declare class CreateUserDefinedMessageCreateUserDefinedMessageRequest extends SpeakeasyBase {
    content: string;
    idempotencyKey?: string;
}
export declare class CreateUserDefinedMessageSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class CreateUserDefinedMessageRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: CreateUserDefinedMessagePathParams;
    request?: CreateUserDefinedMessageCreateUserDefinedMessageRequest;
    security: CreateUserDefinedMessageSecurity;
}
export declare class CreateUserDefinedMessageResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    apiV2010AccountCallUserDefinedMessage?: shared.ApiV2010AccountCallUserDefinedMessage;
}
