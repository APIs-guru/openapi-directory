import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const CreateSyncServiceServerList: readonly ["https://preview.twilio.com"];
export declare class CreateSyncServiceCreateSyncServiceRequest extends SpeakeasyBase {
    aclEnabled?: boolean;
    friendlyName?: string;
    reachabilityWebhooksEnabled?: boolean;
    webhookUrl?: string;
}
export declare class CreateSyncServiceSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class CreateSyncServiceRequest extends SpeakeasyBase {
    serverUrl?: string;
    request?: CreateSyncServiceCreateSyncServiceRequest;
    security: CreateSyncServiceSecurity;
}
export declare class CreateSyncServiceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    previewSyncService?: shared.PreviewSyncService;
}
