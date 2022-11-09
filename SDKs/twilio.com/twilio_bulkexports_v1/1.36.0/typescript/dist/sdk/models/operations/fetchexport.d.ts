import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const FETCHEXPORT_SERVERS: string[];
export declare class FetchExportPathParams extends SpeakeasyBase {
    resourceType: string;
}
export declare class FetchExportSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchExportRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchExportPathParams;
    security: FetchExportSecurity;
}
export declare class FetchExportResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    bulkexportsV1Export?: shared.BulkexportsV1Export;
}
