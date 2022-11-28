import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const CreateBindingServerList: readonly ["https://notify.twilio.com"];
export declare class CreateBindingPathParams extends SpeakeasyBase {
    serviceSid: string;
}
export declare class CreateBindingCreateBindingRequest extends SpeakeasyBase {
    address: string;
    bindingType: shared.BindingEnumBindingTypeEnum;
    credentialSid?: string;
    endpoint?: string;
    identity: string;
    notificationProtocolVersion?: string;
    tag?: string[];
}
export declare class CreateBindingSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class CreateBindingRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: CreateBindingPathParams;
    request?: CreateBindingCreateBindingRequest;
    security: CreateBindingSecurity;
}
export declare class CreateBindingResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    notifyV1ServiceBinding?: shared.NotifyV1ServiceBinding;
}
