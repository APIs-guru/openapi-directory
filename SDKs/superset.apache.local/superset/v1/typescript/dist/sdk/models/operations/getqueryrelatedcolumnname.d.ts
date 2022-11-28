import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetQueryRelatedColumnNamePathParams extends SpeakeasyBase {
    columnName: string;
}
export declare class GetQueryRelatedColumnNameQueryParams extends SpeakeasyBase {
    q?: shared.GetRelatedSchema;
}
export declare class GetQueryRelatedColumnNameSecurity extends SpeakeasyBase {
    jwt: shared.SchemeJwt;
}
export declare class GetQueryRelatedColumnName400ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetQueryRelatedColumnName401ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetQueryRelatedColumnName404ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetQueryRelatedColumnName500ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetQueryRelatedColumnNameRequest extends SpeakeasyBase {
    pathParams: GetQueryRelatedColumnNamePathParams;
    queryParams: GetQueryRelatedColumnNameQueryParams;
    security: GetQueryRelatedColumnNameSecurity;
}
export declare class GetQueryRelatedColumnNameResponse extends SpeakeasyBase {
    contentType: string;
    getQueryRelatedColumnName400ApplicationJsonObject?: GetQueryRelatedColumnName400ApplicationJson;
    getQueryRelatedColumnName401ApplicationJsonObject?: GetQueryRelatedColumnName401ApplicationJson;
    getQueryRelatedColumnName404ApplicationJsonObject?: GetQueryRelatedColumnName404ApplicationJson;
    getQueryRelatedColumnName500ApplicationJsonObject?: GetQueryRelatedColumnName500ApplicationJson;
    relatedResponseSchema?: shared.RelatedResponseSchema;
    statusCode: number;
}
