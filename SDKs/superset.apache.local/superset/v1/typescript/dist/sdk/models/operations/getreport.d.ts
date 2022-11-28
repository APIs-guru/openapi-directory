import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetReportQueryParams extends SpeakeasyBase {
    q?: shared.GetListSchema;
}
export declare class GetReportSecurity extends SpeakeasyBase {
    jwt: shared.SchemeJwt;
}
export declare class GetReport200ApplicationJsonDescriptionColumns extends SpeakeasyBase {
    columnName?: string;
}
export declare class GetReport200ApplicationJsonLabelColumns extends SpeakeasyBase {
    columnName?: string;
}
export declare class GetReport200ApplicationJson extends SpeakeasyBase {
    count?: number;
    descriptionColumns?: GetReport200ApplicationJsonDescriptionColumns;
    ids?: string[];
    labelColumns?: GetReport200ApplicationJsonLabelColumns;
    listColumns?: string[];
    listTitle?: string;
    orderColumns?: string[];
    result?: shared.ReportScheduleRestApiGetList[];
}
export declare class GetReport400ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetReport401ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetReport422ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetReport500ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetReportRequest extends SpeakeasyBase {
    queryParams: GetReportQueryParams;
    security: GetReportSecurity;
}
export declare class GetReportResponse extends SpeakeasyBase {
    contentType: string;
    getReport200ApplicationJsonObject?: GetReport200ApplicationJson;
    getReport400ApplicationJsonObject?: GetReport400ApplicationJson;
    getReport401ApplicationJsonObject?: GetReport401ApplicationJson;
    getReport422ApplicationJsonObject?: GetReport422ApplicationJson;
    getReport500ApplicationJsonObject?: GetReport500ApplicationJson;
    statusCode: number;
}
