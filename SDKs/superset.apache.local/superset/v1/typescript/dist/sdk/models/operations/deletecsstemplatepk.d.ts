import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteCssTemplatePkPathParams extends SpeakeasyBase {
    pk: number;
}
export declare class DeleteCssTemplatePkSecurity extends SpeakeasyBase {
    jwt: shared.SchemeJwt;
}
export declare class DeleteCssTemplatePk200ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class DeleteCssTemplatePk404ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class DeleteCssTemplatePk422ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class DeleteCssTemplatePk500ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class DeleteCssTemplatePkRequest extends SpeakeasyBase {
    pathParams: DeleteCssTemplatePkPathParams;
    security: DeleteCssTemplatePkSecurity;
}
export declare class DeleteCssTemplatePkResponse extends SpeakeasyBase {
    contentType: string;
    deleteCssTemplatePk200ApplicationJsonObject?: DeleteCssTemplatePk200ApplicationJson;
    deleteCssTemplatePk404ApplicationJsonObject?: DeleteCssTemplatePk404ApplicationJson;
    deleteCssTemplatePk422ApplicationJsonObject?: DeleteCssTemplatePk422ApplicationJson;
    deleteCssTemplatePk500ApplicationJsonObject?: DeleteCssTemplatePk500ApplicationJson;
    statusCode: number;
}
