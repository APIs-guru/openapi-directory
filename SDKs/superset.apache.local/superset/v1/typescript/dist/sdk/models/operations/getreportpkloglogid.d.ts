import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetReportPkLogLogIdPathParams extends SpeakeasyBase {
    logId: number;
    pk: number;
}
export declare class GetReportPkLogLogIdQueryParams extends SpeakeasyBase {
    q?: shared.GetItemSchema;
}
export declare class GetReportPkLogLogIdSecurity extends SpeakeasyBase {
    jwt: shared.SchemeJwt;
}
export declare class GetReportPkLogLogId200ApplicationJson extends SpeakeasyBase {
    id?: string;
    result?: shared.ReportExecutionLogRestApiGet;
}
export declare class GetReportPkLogLogId400ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetReportPkLogLogId401ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetReportPkLogLogId404ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetReportPkLogLogId422ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetReportPkLogLogId500ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetReportPkLogLogIdRequest extends SpeakeasyBase {
    pathParams: GetReportPkLogLogIdPathParams;
    queryParams: GetReportPkLogLogIdQueryParams;
    security: GetReportPkLogLogIdSecurity;
}
export declare class GetReportPkLogLogIdResponse extends SpeakeasyBase {
    contentType: string;
    getReportPkLogLogId200ApplicationJsonObject?: GetReportPkLogLogId200ApplicationJson;
    getReportPkLogLogId400ApplicationJsonObject?: GetReportPkLogLogId400ApplicationJson;
    getReportPkLogLogId401ApplicationJsonObject?: GetReportPkLogLogId401ApplicationJson;
    getReportPkLogLogId404ApplicationJsonObject?: GetReportPkLogLogId404ApplicationJson;
    getReportPkLogLogId422ApplicationJsonObject?: GetReportPkLogLogId422ApplicationJson;
    getReportPkLogLogId500ApplicationJsonObject?: GetReportPkLogLogId500ApplicationJson;
    statusCode: number;
}
