import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const FETCHSYNCSERVICE_SERVERS: string[];
export declare class FetchSyncServicePathParams extends SpeakeasyBase {
    sid: string;
}
export declare class FetchSyncServiceSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchSyncServiceRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchSyncServicePathParams;
    security: FetchSyncServiceSecurity;
}
export declare class FetchSyncServiceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    previewSyncService?: shared.PreviewSyncService;
}
