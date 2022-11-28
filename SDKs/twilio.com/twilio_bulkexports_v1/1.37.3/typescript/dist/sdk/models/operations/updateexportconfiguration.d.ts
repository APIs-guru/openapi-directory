import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const UpdateExportConfigurationServerList: readonly ["https://bulkexports.twilio.com"];
export declare class UpdateExportConfigurationPathParams extends SpeakeasyBase {
    resourceType: string;
}
export declare class UpdateExportConfigurationUpdateExportConfigurationRequest extends SpeakeasyBase {
    enabled?: boolean;
    webhookMethod?: string;
    webhookUrl?: string;
}
export declare class UpdateExportConfigurationSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class UpdateExportConfigurationRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: UpdateExportConfigurationPathParams;
    request?: UpdateExportConfigurationUpdateExportConfigurationRequest;
    security: UpdateExportConfigurationSecurity;
}
export declare class UpdateExportConfigurationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    bulkexportsV1ExportConfiguration?: shared.BulkexportsV1ExportConfiguration;
}
