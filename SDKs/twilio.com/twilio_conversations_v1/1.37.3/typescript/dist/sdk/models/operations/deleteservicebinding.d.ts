import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const DeleteServiceBindingServerList: readonly ["https://conversations.twilio.com"];
export declare class DeleteServiceBindingPathParams extends SpeakeasyBase {
    chatServiceSid: string;
    sid: string;
}
export declare class DeleteServiceBindingSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class DeleteServiceBindingRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: DeleteServiceBindingPathParams;
    security: DeleteServiceBindingSecurity;
}
export declare class DeleteServiceBindingResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
