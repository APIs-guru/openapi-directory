import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetReportPkLogPathParams extends SpeakeasyBase {
    pk: number;
}
export declare class GetReportPkLogQueryParams extends SpeakeasyBase {
    q?: shared.GetListSchema;
}
export declare class GetReportPkLogSecurity extends SpeakeasyBase {
    jwt: shared.SchemeJwt;
}
export declare class GetReportPkLog200ApplicationJson extends SpeakeasyBase {
    count?: number;
    ids?: string[];
    result?: shared.ReportExecutionLogRestApiGetList[];
}
export declare class GetReportPkLog400ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetReportPkLog401ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetReportPkLog422ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetReportPkLog500ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetReportPkLogRequest extends SpeakeasyBase {
    pathParams: GetReportPkLogPathParams;
    queryParams: GetReportPkLogQueryParams;
    security: GetReportPkLogSecurity;
}
export declare class GetReportPkLogResponse extends SpeakeasyBase {
    contentType: string;
    getReportPkLog200ApplicationJsonObject?: GetReportPkLog200ApplicationJson;
    getReportPkLog400ApplicationJsonObject?: GetReportPkLog400ApplicationJson;
    getReportPkLog401ApplicationJsonObject?: GetReportPkLog401ApplicationJson;
    getReportPkLog422ApplicationJsonObject?: GetReportPkLog422ApplicationJson;
    getReportPkLog500ApplicationJsonObject?: GetReportPkLog500ApplicationJson;
    statusCode: number;
}
