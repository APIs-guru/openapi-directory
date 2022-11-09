import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const UPDATESERVICE_SERVERS: string[];
export declare class UpdateServicePathParams extends SpeakeasyBase {
    sid: string;
}
export declare class UpdateServiceUpdateServiceRequest extends SpeakeasyBase {
    aclEnabled?: boolean;
    friendlyName?: string;
    reachabilityDebouncingEnabled?: boolean;
    reachabilityDebouncingWindow?: number;
    reachabilityWebhooksEnabled?: boolean;
    webhookUrl?: string;
    webhooksFromRestEnabled?: boolean;
}
export declare class UpdateServiceSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class UpdateServiceRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: UpdateServicePathParams;
    request?: UpdateServiceUpdateServiceRequest;
    security: UpdateServiceSecurity;
}
export declare class UpdateServiceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    syncV1Service?: shared.SyncV1Service;
}
