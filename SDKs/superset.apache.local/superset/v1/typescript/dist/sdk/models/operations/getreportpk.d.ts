import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetReportPkPathParams extends SpeakeasyBase {
    pk: number;
}
export declare class GetReportPkQueryParams extends SpeakeasyBase {
    q?: shared.GetItemSchema;
}
export declare class GetReportPkSecurity extends SpeakeasyBase {
    jwt: shared.SchemeJwt;
}
export declare class GetReportPk200ApplicationJsonDescriptionColumns extends SpeakeasyBase {
    columnName?: string;
}
export declare class GetReportPk200ApplicationJsonLabelColumns extends SpeakeasyBase {
    columnName?: string;
}
export declare class GetReportPk200ApplicationJson extends SpeakeasyBase {
    descriptionColumns?: GetReportPk200ApplicationJsonDescriptionColumns;
    id?: string;
    labelColumns?: GetReportPk200ApplicationJsonLabelColumns;
    result?: shared.ReportScheduleRestApiGet;
    showColumns?: string[];
    showTitle?: string;
}
export declare class GetReportPk400ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetReportPk401ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetReportPk404ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetReportPk422ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetReportPk500ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetReportPkRequest extends SpeakeasyBase {
    pathParams: GetReportPkPathParams;
    queryParams: GetReportPkQueryParams;
    security: GetReportPkSecurity;
}
export declare class GetReportPkResponse extends SpeakeasyBase {
    contentType: string;
    getReportPk200ApplicationJsonObject?: GetReportPk200ApplicationJson;
    getReportPk400ApplicationJsonObject?: GetReportPk400ApplicationJson;
    getReportPk401ApplicationJsonObject?: GetReportPk401ApplicationJson;
    getReportPk404ApplicationJsonObject?: GetReportPk404ApplicationJson;
    getReportPk422ApplicationJsonObject?: GetReportPk422ApplicationJson;
    getReportPk500ApplicationJsonObject?: GetReportPk500ApplicationJson;
    statusCode: number;
}
