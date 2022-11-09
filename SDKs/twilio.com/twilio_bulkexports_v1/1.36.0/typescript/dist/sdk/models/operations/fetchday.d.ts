import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const FETCHDAY_SERVERS: string[];
export declare class FetchDayPathParams extends SpeakeasyBase {
    day: string;
    resourceType: string;
}
export declare class FetchDaySecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchDayRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchDayPathParams;
    security: FetchDaySecurity;
}
export declare class FetchDayResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    bulkexportsV1ExportDayInstance?: shared.BulkexportsV1ExportDayInstance;
}
