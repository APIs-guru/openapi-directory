import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const ListSettingsUpdateServerList: readonly ["https://supersim.twilio.com"];
export declare class ListSettingsUpdateQueryParams extends SpeakeasyBase {
    pageSize?: number;
    sim?: string;
}
export declare class ListSettingsUpdateSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListSettingsUpdateListSettingsUpdateResponseMeta extends SpeakeasyBase {
    firstPageUrl?: string;
    key?: string;
    nextPageUrl?: string;
    page?: number;
    pageSize?: number;
    previousPageUrl?: string;
    url?: string;
}
export declare class ListSettingsUpdateListSettingsUpdateResponse extends SpeakeasyBase {
    meta?: ListSettingsUpdateListSettingsUpdateResponseMeta;
    settingsUpdates?: shared.SupersimV1SettingsUpdate[];
}
export declare class ListSettingsUpdateRequest extends SpeakeasyBase {
    serverUrl?: string;
    queryParams: ListSettingsUpdateQueryParams;
    security: ListSettingsUpdateSecurity;
}
export declare class ListSettingsUpdateResponse extends SpeakeasyBase {
    contentType: string;
    listSettingsUpdateResponse?: ListSettingsUpdateListSettingsUpdateResponse;
    statusCode: number;
}
