import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const CREATEEXPORTCUSTOMJOB_SERVERS: string[];
export declare class CreateExportCustomJobPathParams extends SpeakeasyBase {
    resourceType: string;
}
export declare class CreateExportCustomJobCreateExportCustomJobRequest extends SpeakeasyBase {
    email?: string;
    endDay: string;
    friendlyName: string;
    startDay: string;
    webhookMethod?: string;
    webhookUrl?: string;
}
export declare class CreateExportCustomJobSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class CreateExportCustomJobRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: CreateExportCustomJobPathParams;
    request?: CreateExportCustomJobCreateExportCustomJobRequest;
    security: CreateExportCustomJobSecurity;
}
export declare class CreateExportCustomJobResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    bulkexportsV1ExportExportCustomJob?: shared.BulkexportsV1ExportExportCustomJob;
}
