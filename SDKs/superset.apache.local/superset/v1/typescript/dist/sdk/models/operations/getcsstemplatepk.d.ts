import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetCssTemplatePkPathParams extends SpeakeasyBase {
    pk: number;
}
export declare class GetCssTemplatePkQueryParams extends SpeakeasyBase {
    q?: shared.GetItemSchema;
}
export declare class GetCssTemplatePkSecurity extends SpeakeasyBase {
    jwt: shared.SchemeJwt;
}
export declare class GetCssTemplatePk200ApplicationJsonDescriptionColumns extends SpeakeasyBase {
    columnName?: string;
}
export declare class GetCssTemplatePk200ApplicationJsonLabelColumns extends SpeakeasyBase {
    columnName?: string;
}
export declare class GetCssTemplatePk200ApplicationJson extends SpeakeasyBase {
    descriptionColumns?: GetCssTemplatePk200ApplicationJsonDescriptionColumns;
    id?: string;
    labelColumns?: GetCssTemplatePk200ApplicationJsonLabelColumns;
    result?: shared.CssTemplateRestApiGet;
    showColumns?: string[];
    showTitle?: string;
}
export declare class GetCssTemplatePk400ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetCssTemplatePk401ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetCssTemplatePk404ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetCssTemplatePk422ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetCssTemplatePk500ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetCssTemplatePkRequest extends SpeakeasyBase {
    pathParams: GetCssTemplatePkPathParams;
    queryParams: GetCssTemplatePkQueryParams;
    security: GetCssTemplatePkSecurity;
}
export declare class GetCssTemplatePkResponse extends SpeakeasyBase {
    contentType: string;
    getCssTemplatePk200ApplicationJsonObject?: GetCssTemplatePk200ApplicationJson;
    getCssTemplatePk400ApplicationJsonObject?: GetCssTemplatePk400ApplicationJson;
    getCssTemplatePk401ApplicationJsonObject?: GetCssTemplatePk401ApplicationJson;
    getCssTemplatePk404ApplicationJsonObject?: GetCssTemplatePk404ApplicationJson;
    getCssTemplatePk422ApplicationJsonObject?: GetCssTemplatePk422ApplicationJson;
    getCssTemplatePk500ApplicationJsonObject?: GetCssTemplatePk500ApplicationJson;
    statusCode: number;
}
