import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetCssTemplateQueryParams extends SpeakeasyBase {
    q?: shared.GetListSchema;
}
export declare class GetCssTemplateSecurity extends SpeakeasyBase {
    jwt: shared.SchemeJwt;
}
export declare class GetCssTemplate200ApplicationJsonDescriptionColumns extends SpeakeasyBase {
    columnName?: string;
}
export declare class GetCssTemplate200ApplicationJsonLabelColumns extends SpeakeasyBase {
    columnName?: string;
}
export declare class GetCssTemplate200ApplicationJson extends SpeakeasyBase {
    count?: number;
    descriptionColumns?: GetCssTemplate200ApplicationJsonDescriptionColumns;
    ids?: string[];
    labelColumns?: GetCssTemplate200ApplicationJsonLabelColumns;
    listColumns?: string[];
    listTitle?: string;
    orderColumns?: string[];
    result?: shared.CssTemplateRestApiGetList[];
}
export declare class GetCssTemplate400ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetCssTemplate401ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetCssTemplate422ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetCssTemplate500ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetCssTemplateRequest extends SpeakeasyBase {
    queryParams: GetCssTemplateQueryParams;
    security: GetCssTemplateSecurity;
}
export declare class GetCssTemplateResponse extends SpeakeasyBase {
    contentType: string;
    getCssTemplate200ApplicationJsonObject?: GetCssTemplate200ApplicationJson;
    getCssTemplate400ApplicationJsonObject?: GetCssTemplate400ApplicationJson;
    getCssTemplate401ApplicationJsonObject?: GetCssTemplate401ApplicationJson;
    getCssTemplate422ApplicationJsonObject?: GetCssTemplate422ApplicationJson;
    getCssTemplate500ApplicationJsonObject?: GetCssTemplate500ApplicationJson;
    statusCode: number;
}
