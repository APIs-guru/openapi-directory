import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetCssTemplateRelatedColumnNamePathParams extends SpeakeasyBase {
    columnName: string;
}
export declare class GetCssTemplateRelatedColumnNameQueryParams extends SpeakeasyBase {
    q?: shared.GetRelatedSchema;
}
export declare class GetCssTemplateRelatedColumnNameSecurity extends SpeakeasyBase {
    jwt: shared.SchemeJwt;
}
export declare class GetCssTemplateRelatedColumnName400ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetCssTemplateRelatedColumnName401ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetCssTemplateRelatedColumnName404ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetCssTemplateRelatedColumnName500ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetCssTemplateRelatedColumnNameRequest extends SpeakeasyBase {
    pathParams: GetCssTemplateRelatedColumnNamePathParams;
    queryParams: GetCssTemplateRelatedColumnNameQueryParams;
    security: GetCssTemplateRelatedColumnNameSecurity;
}
export declare class GetCssTemplateRelatedColumnNameResponse extends SpeakeasyBase {
    contentType: string;
    getCssTemplateRelatedColumnName400ApplicationJsonObject?: GetCssTemplateRelatedColumnName400ApplicationJson;
    getCssTemplateRelatedColumnName401ApplicationJsonObject?: GetCssTemplateRelatedColumnName401ApplicationJson;
    getCssTemplateRelatedColumnName404ApplicationJsonObject?: GetCssTemplateRelatedColumnName404ApplicationJson;
    getCssTemplateRelatedColumnName500ApplicationJsonObject?: GetCssTemplateRelatedColumnName500ApplicationJson;
    relatedResponseSchema?: shared.RelatedResponseSchema;
    statusCode: number;
}
