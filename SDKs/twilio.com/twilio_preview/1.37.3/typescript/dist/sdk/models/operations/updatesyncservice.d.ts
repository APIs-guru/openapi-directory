import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const UpdateSyncServiceServerList: readonly ["https://preview.twilio.com"];
export declare class UpdateSyncServicePathParams extends SpeakeasyBase {
    sid: string;
}
export declare class UpdateSyncServiceUpdateSyncServiceRequest extends SpeakeasyBase {
    aclEnabled?: boolean;
    friendlyName?: string;
    reachabilityWebhooksEnabled?: boolean;
    webhookUrl?: string;
}
export declare class UpdateSyncServiceSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class UpdateSyncServiceRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: UpdateSyncServicePathParams;
    request?: UpdateSyncServiceUpdateSyncServiceRequest;
    security: UpdateSyncServiceSecurity;
}
export declare class UpdateSyncServiceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    previewSyncService?: shared.PreviewSyncService;
}
