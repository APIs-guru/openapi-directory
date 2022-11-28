import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSavedQueryDistinctColumnNamePathParams extends SpeakeasyBase {
    columnName: string;
}
export declare class GetSavedQueryDistinctColumnNameQueryParams extends SpeakeasyBase {
    q?: shared.GetRelatedSchema;
}
export declare class GetSavedQueryDistinctColumnNameSecurity extends SpeakeasyBase {
    jwt: shared.SchemeJwt;
}
export declare class GetSavedQueryDistinctColumnName400ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetSavedQueryDistinctColumnName401ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetSavedQueryDistinctColumnName404ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetSavedQueryDistinctColumnName500ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetSavedQueryDistinctColumnNameRequest extends SpeakeasyBase {
    pathParams: GetSavedQueryDistinctColumnNamePathParams;
    queryParams: GetSavedQueryDistinctColumnNameQueryParams;
    security: GetSavedQueryDistinctColumnNameSecurity;
}
export declare class GetSavedQueryDistinctColumnNameResponse extends SpeakeasyBase {
    contentType: string;
    distincResponseSchema?: shared.DistincResponseSchema;
    getSavedQueryDistinctColumnName400ApplicationJsonObject?: GetSavedQueryDistinctColumnName400ApplicationJson;
    getSavedQueryDistinctColumnName401ApplicationJsonObject?: GetSavedQueryDistinctColumnName401ApplicationJson;
    getSavedQueryDistinctColumnName404ApplicationJsonObject?: GetSavedQueryDistinctColumnName404ApplicationJson;
    getSavedQueryDistinctColumnName500ApplicationJsonObject?: GetSavedQueryDistinctColumnName500ApplicationJson;
    statusCode: number;
}
