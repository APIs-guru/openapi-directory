import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const LISTEXPORTCUSTOMJOB_SERVERS: string[];
export declare class ListExportCustomJobPathParams extends SpeakeasyBase {
    resourceType: string;
}
export declare class ListExportCustomJobQueryParams extends SpeakeasyBase {
    pageSize?: number;
}
export declare class ListExportCustomJobSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListExportCustomJobRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: ListExportCustomJobPathParams;
    queryParams: ListExportCustomJobQueryParams;
    security: ListExportCustomJobSecurity;
}
export declare class ListExportCustomJobListExportCustomJobResponseMeta extends SpeakeasyBase {
    firstPageUrl?: string;
    key?: string;
    nextPageUrl?: string;
    page?: number;
    pageSize?: number;
    previousPageUrl?: string;
    url?: string;
}
export declare class ListExportCustomJobListExportCustomJobResponse extends SpeakeasyBase {
    jobs?: shared.BulkexportsV1ExportExportCustomJob[];
    meta?: ListExportCustomJobListExportCustomJobResponseMeta;
}
export declare class ListExportCustomJobResponse extends SpeakeasyBase {
    contentType: string;
    listExportCustomJobResponse?: ListExportCustomJobListExportCustomJobResponse;
    statusCode: number;
}
