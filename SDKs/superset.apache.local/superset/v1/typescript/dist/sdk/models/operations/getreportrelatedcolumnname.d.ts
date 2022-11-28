import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetReportRelatedColumnNamePathParams extends SpeakeasyBase {
    columnName: string;
}
export declare class GetReportRelatedColumnNameQueryParams extends SpeakeasyBase {
    q?: shared.GetRelatedSchema;
}
export declare class GetReportRelatedColumnNameSecurity extends SpeakeasyBase {
    jwt: shared.SchemeJwt;
}
export declare class GetReportRelatedColumnName400ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetReportRelatedColumnName401ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetReportRelatedColumnName404ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetReportRelatedColumnName500ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetReportRelatedColumnNameRequest extends SpeakeasyBase {
    pathParams: GetReportRelatedColumnNamePathParams;
    queryParams: GetReportRelatedColumnNameQueryParams;
    security: GetReportRelatedColumnNameSecurity;
}
export declare class GetReportRelatedColumnNameResponse extends SpeakeasyBase {
    contentType: string;
    getReportRelatedColumnName400ApplicationJsonObject?: GetReportRelatedColumnName400ApplicationJson;
    getReportRelatedColumnName401ApplicationJsonObject?: GetReportRelatedColumnName401ApplicationJson;
    getReportRelatedColumnName404ApplicationJsonObject?: GetReportRelatedColumnName404ApplicationJson;
    getReportRelatedColumnName500ApplicationJsonObject?: GetReportRelatedColumnName500ApplicationJson;
    relatedResponseSchema?: shared.RelatedResponseSchema;
    statusCode: number;
}
