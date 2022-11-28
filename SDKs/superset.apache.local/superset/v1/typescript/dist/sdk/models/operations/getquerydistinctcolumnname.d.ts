import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetQueryDistinctColumnNamePathParams extends SpeakeasyBase {
    columnName: string;
}
export declare class GetQueryDistinctColumnNameQueryParams extends SpeakeasyBase {
    q?: shared.GetRelatedSchema;
}
export declare class GetQueryDistinctColumnNameSecurity extends SpeakeasyBase {
    jwt: shared.SchemeJwt;
}
export declare class GetQueryDistinctColumnName400ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetQueryDistinctColumnName401ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetQueryDistinctColumnName404ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetQueryDistinctColumnName500ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetQueryDistinctColumnNameRequest extends SpeakeasyBase {
    pathParams: GetQueryDistinctColumnNamePathParams;
    queryParams: GetQueryDistinctColumnNameQueryParams;
    security: GetQueryDistinctColumnNameSecurity;
}
export declare class GetQueryDistinctColumnNameResponse extends SpeakeasyBase {
    contentType: string;
    distincResponseSchema?: shared.DistincResponseSchema;
    getQueryDistinctColumnName400ApplicationJsonObject?: GetQueryDistinctColumnName400ApplicationJson;
    getQueryDistinctColumnName401ApplicationJsonObject?: GetQueryDistinctColumnName401ApplicationJson;
    getQueryDistinctColumnName404ApplicationJsonObject?: GetQueryDistinctColumnName404ApplicationJson;
    getQueryDistinctColumnName500ApplicationJsonObject?: GetQueryDistinctColumnName500ApplicationJson;
    statusCode: number;
}
