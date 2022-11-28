import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostCssTemplateSecurity extends SpeakeasyBase {
    jwt: shared.SchemeJwt;
}
export declare class PostCssTemplate201ApplicationJson extends SpeakeasyBase {
    id?: string;
    result?: shared.CssTemplateRestApiPost;
}
export declare class PostCssTemplate400ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class PostCssTemplate401ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class PostCssTemplate422ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class PostCssTemplate500ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class PostCssTemplateRequest extends SpeakeasyBase {
    request: shared.CssTemplateRestApiPost;
    security: PostCssTemplateSecurity;
}
export declare class PostCssTemplateResponse extends SpeakeasyBase {
    contentType: string;
    postCssTemplate201ApplicationJsonObject?: PostCssTemplate201ApplicationJson;
    postCssTemplate400ApplicationJsonObject?: PostCssTemplate400ApplicationJson;
    postCssTemplate401ApplicationJsonObject?: PostCssTemplate401ApplicationJson;
    postCssTemplate422ApplicationJsonObject?: PostCssTemplate422ApplicationJson;
    postCssTemplate500ApplicationJsonObject?: PostCssTemplate500ApplicationJson;
    statusCode: number;
}
