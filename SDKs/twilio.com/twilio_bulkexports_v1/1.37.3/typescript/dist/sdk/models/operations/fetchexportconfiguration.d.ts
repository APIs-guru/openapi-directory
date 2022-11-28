import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const FetchExportConfigurationServerList: readonly ["https://bulkexports.twilio.com"];
export declare class FetchExportConfigurationPathParams extends SpeakeasyBase {
    resourceType: string;
}
export declare class FetchExportConfigurationSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchExportConfigurationRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchExportConfigurationPathParams;
    security: FetchExportConfigurationSecurity;
}
export declare class FetchExportConfigurationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    bulkexportsV1ExportConfiguration?: shared.BulkexportsV1ExportConfiguration;
}
