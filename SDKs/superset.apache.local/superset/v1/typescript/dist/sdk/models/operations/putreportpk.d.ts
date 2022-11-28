import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutReportPkPathParams extends SpeakeasyBase {
    pk: number;
}
export declare class PutReportPkSecurity extends SpeakeasyBase {
    jwt: shared.SchemeJwt;
}
export declare class PutReportPk200ApplicationJson extends SpeakeasyBase {
    id?: number;
    result?: shared.ReportScheduleRestApiPut;
}
export declare class PutReportPk400ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class PutReportPk401ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class PutReportPk403ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class PutReportPk404ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class PutReportPk500ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class PutReportPkRequest extends SpeakeasyBase {
    pathParams: PutReportPkPathParams;
    request: shared.ReportScheduleRestApiPut;
    security: PutReportPkSecurity;
}
export declare class PutReportPkResponse extends SpeakeasyBase {
    contentType: string;
    putReportPk200ApplicationJsonObject?: PutReportPk200ApplicationJson;
    putReportPk400ApplicationJsonObject?: PutReportPk400ApplicationJson;
    putReportPk401ApplicationJsonObject?: PutReportPk401ApplicationJson;
    putReportPk403ApplicationJsonObject?: PutReportPk403ApplicationJson;
    putReportPk404ApplicationJsonObject?: PutReportPk404ApplicationJson;
    putReportPk500ApplicationJsonObject?: PutReportPk500ApplicationJson;
    statusCode: number;
}
