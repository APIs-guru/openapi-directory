import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetDatasetDistinctColumnNamePathParams extends SpeakeasyBase {
    columnName: string;
}
export declare class GetDatasetDistinctColumnNameQueryParams extends SpeakeasyBase {
    q?: shared.GetRelatedSchema;
}
export declare class GetDatasetDistinctColumnNameSecurity extends SpeakeasyBase {
    jwt: shared.SchemeJwt;
}
export declare class GetDatasetDistinctColumnName400ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetDatasetDistinctColumnName401ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetDatasetDistinctColumnName404ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetDatasetDistinctColumnName500ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetDatasetDistinctColumnNameRequest extends SpeakeasyBase {
    pathParams: GetDatasetDistinctColumnNamePathParams;
    queryParams: GetDatasetDistinctColumnNameQueryParams;
    security: GetDatasetDistinctColumnNameSecurity;
}
export declare class GetDatasetDistinctColumnNameResponse extends SpeakeasyBase {
    contentType: string;
    distincResponseSchema?: shared.DistincResponseSchema;
    getDatasetDistinctColumnName400ApplicationJsonObject?: GetDatasetDistinctColumnName400ApplicationJson;
    getDatasetDistinctColumnName401ApplicationJsonObject?: GetDatasetDistinctColumnName401ApplicationJson;
    getDatasetDistinctColumnName404ApplicationJsonObject?: GetDatasetDistinctColumnName404ApplicationJson;
    getDatasetDistinctColumnName500ApplicationJsonObject?: GetDatasetDistinctColumnName500ApplicationJson;
    statusCode: number;
}
