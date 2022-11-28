import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetChartRelatedColumnNamePathParams extends SpeakeasyBase {
    columnName: string;
}
export declare class GetChartRelatedColumnNameQueryParams extends SpeakeasyBase {
    q?: shared.GetRelatedSchema;
}
export declare class GetChartRelatedColumnNameSecurity extends SpeakeasyBase {
    jwt: shared.SchemeJwt;
}
export declare class GetChartRelatedColumnName400ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetChartRelatedColumnName401ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetChartRelatedColumnName404ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetChartRelatedColumnName500ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetChartRelatedColumnNameRequest extends SpeakeasyBase {
    pathParams: GetChartRelatedColumnNamePathParams;
    queryParams: GetChartRelatedColumnNameQueryParams;
    security: GetChartRelatedColumnNameSecurity;
}
export declare class GetChartRelatedColumnNameResponse extends SpeakeasyBase {
    contentType: string;
    getChartRelatedColumnName400ApplicationJsonObject?: GetChartRelatedColumnName400ApplicationJson;
    getChartRelatedColumnName401ApplicationJsonObject?: GetChartRelatedColumnName401ApplicationJson;
    getChartRelatedColumnName404ApplicationJsonObject?: GetChartRelatedColumnName404ApplicationJson;
    getChartRelatedColumnName500ApplicationJsonObject?: GetChartRelatedColumnName500ApplicationJson;
    relatedResponseSchema?: shared.RelatedResponseSchema;
    statusCode: number;
}
