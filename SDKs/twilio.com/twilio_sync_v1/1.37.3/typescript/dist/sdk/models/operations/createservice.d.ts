import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const CreateServiceServerList: readonly ["https://sync.twilio.com"];
export declare class CreateServiceCreateServiceRequest extends SpeakeasyBase {
    aclEnabled?: boolean;
    friendlyName?: string;
    reachabilityDebouncingEnabled?: boolean;
    reachabilityDebouncingWindow?: number;
    reachabilityWebhooksEnabled?: boolean;
    webhookUrl?: string;
    webhooksFromRestEnabled?: boolean;
}
export declare class CreateServiceSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class CreateServiceRequest extends SpeakeasyBase {
    serverUrl?: string;
    request?: CreateServiceCreateServiceRequest;
    security: CreateServiceSecurity;
}
export declare class CreateServiceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    syncV1Service?: shared.SyncV1Service;
}
