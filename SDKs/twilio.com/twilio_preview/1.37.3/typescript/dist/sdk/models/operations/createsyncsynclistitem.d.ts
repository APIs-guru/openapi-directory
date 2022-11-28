import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const CreateSyncSyncListItemServerList: readonly ["https://preview.twilio.com"];
export declare class CreateSyncSyncListItemPathParams extends SpeakeasyBase {
    listSid: string;
    serviceSid: string;
}
export declare class CreateSyncSyncListItemCreateSyncSyncListItemRequest extends SpeakeasyBase {
    data: any;
}
export declare class CreateSyncSyncListItemSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class CreateSyncSyncListItemRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: CreateSyncSyncListItemPathParams;
    request?: CreateSyncSyncListItemCreateSyncSyncListItemRequest;
    security: CreateSyncSyncListItemSecurity;
}
export declare class CreateSyncSyncListItemResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    previewSyncServiceSyncListSyncListItem?: shared.PreviewSyncServiceSyncListSyncListItem;
}
