import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const CreateSyncListItemServerList: readonly ["https://sync.twilio.com"];
export declare class CreateSyncListItemPathParams extends SpeakeasyBase {
    listSid: string;
    serviceSid: string;
}
export declare class CreateSyncListItemCreateSyncListItemRequest extends SpeakeasyBase {
    collectionTtl?: number;
    data: any;
    itemTtl?: number;
    ttl?: number;
}
export declare class CreateSyncListItemSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class CreateSyncListItemRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: CreateSyncListItemPathParams;
    request?: CreateSyncListItemCreateSyncListItemRequest;
    security: CreateSyncListItemSecurity;
}
export declare class CreateSyncListItemResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    syncV1ServiceSyncListSyncListItem?: shared.SyncV1ServiceSyncListSyncListItem;
}
