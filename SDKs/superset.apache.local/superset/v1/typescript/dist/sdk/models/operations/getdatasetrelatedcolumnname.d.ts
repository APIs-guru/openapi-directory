import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetDatasetRelatedColumnNamePathParams extends SpeakeasyBase {
    columnName: string;
}
export declare class GetDatasetRelatedColumnNameQueryParams extends SpeakeasyBase {
    q?: shared.GetRelatedSchema;
}
export declare class GetDatasetRelatedColumnNameSecurity extends SpeakeasyBase {
    jwt: shared.SchemeJwt;
}
export declare class GetDatasetRelatedColumnName400ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetDatasetRelatedColumnName401ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetDatasetRelatedColumnName404ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetDatasetRelatedColumnName500ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetDatasetRelatedColumnNameRequest extends SpeakeasyBase {
    pathParams: GetDatasetRelatedColumnNamePathParams;
    queryParams: GetDatasetRelatedColumnNameQueryParams;
    security: GetDatasetRelatedColumnNameSecurity;
}
export declare class GetDatasetRelatedColumnNameResponse extends SpeakeasyBase {
    contentType: string;
    getDatasetRelatedColumnName400ApplicationJsonObject?: GetDatasetRelatedColumnName400ApplicationJson;
    getDatasetRelatedColumnName401ApplicationJsonObject?: GetDatasetRelatedColumnName401ApplicationJson;
    getDatasetRelatedColumnName404ApplicationJsonObject?: GetDatasetRelatedColumnName404ApplicationJson;
    getDatasetRelatedColumnName500ApplicationJsonObject?: GetDatasetRelatedColumnName500ApplicationJson;
    relatedResponseSchema?: shared.RelatedResponseSchema;
    statusCode: number;
}
