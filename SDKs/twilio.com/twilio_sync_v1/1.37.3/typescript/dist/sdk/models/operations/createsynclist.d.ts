import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const CreateSyncListServerList: readonly ["https://sync.twilio.com"];
export declare class CreateSyncListPathParams extends SpeakeasyBase {
    serviceSid: string;
}
export declare class CreateSyncListCreateSyncListRequest extends SpeakeasyBase {
    collectionTtl?: number;
    ttl?: number;
    uniqueName?: string;
}
export declare class CreateSyncListSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class CreateSyncListRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: CreateSyncListPathParams;
    request?: CreateSyncListCreateSyncListRequest;
    security: CreateSyncListSecurity;
}
export declare class CreateSyncListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    syncV1ServiceSyncList?: shared.SyncV1ServiceSyncList;
}
