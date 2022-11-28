import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSavedQueryRelatedColumnNamePathParams extends SpeakeasyBase {
    columnName: string;
}
export declare class GetSavedQueryRelatedColumnNameQueryParams extends SpeakeasyBase {
    q?: shared.GetRelatedSchema;
}
export declare class GetSavedQueryRelatedColumnNameSecurity extends SpeakeasyBase {
    jwt: shared.SchemeJwt;
}
export declare class GetSavedQueryRelatedColumnName400ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetSavedQueryRelatedColumnName401ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetSavedQueryRelatedColumnName404ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetSavedQueryRelatedColumnName500ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetSavedQueryRelatedColumnNameRequest extends SpeakeasyBase {
    pathParams: GetSavedQueryRelatedColumnNamePathParams;
    queryParams: GetSavedQueryRelatedColumnNameQueryParams;
    security: GetSavedQueryRelatedColumnNameSecurity;
}
export declare class GetSavedQueryRelatedColumnNameResponse extends SpeakeasyBase {
    contentType: string;
    getSavedQueryRelatedColumnName400ApplicationJsonObject?: GetSavedQueryRelatedColumnName400ApplicationJson;
    getSavedQueryRelatedColumnName401ApplicationJsonObject?: GetSavedQueryRelatedColumnName401ApplicationJson;
    getSavedQueryRelatedColumnName404ApplicationJsonObject?: GetSavedQueryRelatedColumnName404ApplicationJson;
    getSavedQueryRelatedColumnName500ApplicationJsonObject?: GetSavedQueryRelatedColumnName500ApplicationJson;
    relatedResponseSchema?: shared.RelatedResponseSchema;
    statusCode: number;
}
