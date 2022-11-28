import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetDashboardRelatedColumnNamePathParams extends SpeakeasyBase {
    columnName: string;
}
export declare class GetDashboardRelatedColumnNameQueryParams extends SpeakeasyBase {
    q?: shared.GetRelatedSchema;
}
export declare class GetDashboardRelatedColumnNameSecurity extends SpeakeasyBase {
    jwt: shared.SchemeJwt;
}
export declare class GetDashboardRelatedColumnName400ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetDashboardRelatedColumnName401ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetDashboardRelatedColumnName404ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetDashboardRelatedColumnName500ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetDashboardRelatedColumnNameRequest extends SpeakeasyBase {
    pathParams: GetDashboardRelatedColumnNamePathParams;
    queryParams: GetDashboardRelatedColumnNameQueryParams;
    security: GetDashboardRelatedColumnNameSecurity;
}
export declare class GetDashboardRelatedColumnNameResponse extends SpeakeasyBase {
    contentType: string;
    getDashboardRelatedColumnName400ApplicationJsonObject?: GetDashboardRelatedColumnName400ApplicationJson;
    getDashboardRelatedColumnName401ApplicationJsonObject?: GetDashboardRelatedColumnName401ApplicationJson;
    getDashboardRelatedColumnName404ApplicationJsonObject?: GetDashboardRelatedColumnName404ApplicationJson;
    getDashboardRelatedColumnName500ApplicationJsonObject?: GetDashboardRelatedColumnName500ApplicationJson;
    relatedResponseSchema?: shared.RelatedResponseSchema;
    statusCode: number;
}
