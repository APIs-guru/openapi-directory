import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const FETCHBINDING_SERVERS: string[];
export declare class FetchBindingPathParams extends SpeakeasyBase {
    serviceSid: string;
    sid: string;
}
export declare class FetchBindingSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchBindingRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchBindingPathParams;
    security: FetchBindingSecurity;
}
export declare class FetchBindingResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    notifyV1ServiceBinding?: shared.NotifyV1ServiceBinding;
}
