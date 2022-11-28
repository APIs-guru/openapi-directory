import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteCssTemplateQueryParams extends SpeakeasyBase {
    q?: number[];
}
export declare class DeleteCssTemplateSecurity extends SpeakeasyBase {
    jwt: shared.SchemeJwt;
}
export declare class DeleteCssTemplate200ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class DeleteCssTemplate401ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class DeleteCssTemplate404ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class DeleteCssTemplate422ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class DeleteCssTemplate500ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class DeleteCssTemplateRequest extends SpeakeasyBase {
    queryParams: DeleteCssTemplateQueryParams;
    security: DeleteCssTemplateSecurity;
}
export declare class DeleteCssTemplateResponse extends SpeakeasyBase {
    contentType: string;
    deleteCssTemplate200ApplicationJsonObject?: DeleteCssTemplate200ApplicationJson;
    deleteCssTemplate401ApplicationJsonObject?: DeleteCssTemplate401ApplicationJson;
    deleteCssTemplate404ApplicationJsonObject?: DeleteCssTemplate404ApplicationJson;
    deleteCssTemplate422ApplicationJsonObject?: DeleteCssTemplate422ApplicationJson;
    deleteCssTemplate500ApplicationJsonObject?: DeleteCssTemplate500ApplicationJson;
    statusCode: number;
}
