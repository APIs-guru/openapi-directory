import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const CreateSyncSyncListServerList: readonly ["https://preview.twilio.com"];
export declare class CreateSyncSyncListPathParams extends SpeakeasyBase {
    serviceSid: string;
}
export declare class CreateSyncSyncListCreateSyncSyncListRequest extends SpeakeasyBase {
    uniqueName?: string;
}
export declare class CreateSyncSyncListSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class CreateSyncSyncListRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: CreateSyncSyncListPathParams;
    request?: CreateSyncSyncListCreateSyncSyncListRequest;
    security: CreateSyncSyncListSecurity;
}
export declare class CreateSyncSyncListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    previewSyncServiceSyncList?: shared.PreviewSyncServiceSyncList;
}
