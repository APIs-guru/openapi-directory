import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutCssTemplatePkPathParams extends SpeakeasyBase {
    pk: number;
}
export declare class PutCssTemplatePkSecurity extends SpeakeasyBase {
    jwt: shared.SchemeJwt;
}
export declare class PutCssTemplatePk200ApplicationJson extends SpeakeasyBase {
    result?: shared.CssTemplateRestApiPut;
}
export declare class PutCssTemplatePk400ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class PutCssTemplatePk401ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class PutCssTemplatePk404ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class PutCssTemplatePk422ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class PutCssTemplatePk500ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class PutCssTemplatePkRequest extends SpeakeasyBase {
    pathParams: PutCssTemplatePkPathParams;
    request: shared.CssTemplateRestApiPut;
    security: PutCssTemplatePkSecurity;
}
export declare class PutCssTemplatePkResponse extends SpeakeasyBase {
    contentType: string;
    putCssTemplatePk200ApplicationJsonObject?: PutCssTemplatePk200ApplicationJson;
    putCssTemplatePk400ApplicationJsonObject?: PutCssTemplatePk400ApplicationJson;
    putCssTemplatePk401ApplicationJsonObject?: PutCssTemplatePk401ApplicationJson;
    putCssTemplatePk404ApplicationJsonObject?: PutCssTemplatePk404ApplicationJson;
    putCssTemplatePk422ApplicationJsonObject?: PutCssTemplatePk422ApplicationJson;
    putCssTemplatePk500ApplicationJsonObject?: PutCssTemplatePk500ApplicationJson;
    statusCode: number;
}
