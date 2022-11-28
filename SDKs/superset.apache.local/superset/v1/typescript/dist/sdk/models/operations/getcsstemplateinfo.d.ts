import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetCssTemplateInfoQueryParams extends SpeakeasyBase {
    q?: shared.GetInfoSchema;
}
export declare class GetCssTemplateInfoSecurity extends SpeakeasyBase {
    jwt: shared.SchemeJwt;
}
export declare class GetCssTemplateInfo200ApplicationJsonFiltersColumnName extends SpeakeasyBase {
    name?: string;
    operator?: string;
}
export declare class GetCssTemplateInfo200ApplicationJsonFilters extends SpeakeasyBase {
    columnName?: GetCssTemplateInfo200ApplicationJsonFiltersColumnName[];
}
export declare class GetCssTemplateInfo200ApplicationJson extends SpeakeasyBase {
    addColumns?: Map<string, any>;
    editColumns?: Map<string, any>;
    filters?: GetCssTemplateInfo200ApplicationJsonFilters;
    permissions?: string[];
}
export declare class GetCssTemplateInfo400ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetCssTemplateInfo401ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetCssTemplateInfo422ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetCssTemplateInfo500ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetCssTemplateInfoRequest extends SpeakeasyBase {
    queryParams: GetCssTemplateInfoQueryParams;
    security: GetCssTemplateInfoSecurity;
}
export declare class GetCssTemplateInfoResponse extends SpeakeasyBase {
    contentType: string;
    getCssTemplateInfo200ApplicationJsonObject?: GetCssTemplateInfo200ApplicationJson;
    getCssTemplateInfo400ApplicationJsonObject?: GetCssTemplateInfo400ApplicationJson;
    getCssTemplateInfo401ApplicationJsonObject?: GetCssTemplateInfo401ApplicationJson;
    getCssTemplateInfo422ApplicationJsonObject?: GetCssTemplateInfo422ApplicationJson;
    getCssTemplateInfo500ApplicationJsonObject?: GetCssTemplateInfo500ApplicationJson;
    statusCode: number;
}
