import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateScriptTagPathParams extends SpeakeasyBase {
    scriptTagId: number;
}
export declare enum UpdateScriptTagRequestBodyScriptTagDisplayScopeEnum {
    All = "all",
    Shop = "shop",
    ThanksPage = "thanks_page",
    Cart = "cart"
}
export declare class UpdateScriptTagRequestBodyScriptTag extends SpeakeasyBase {
    displayScope?: UpdateScriptTagRequestBodyScriptTagDisplayScopeEnum;
    src?: string;
}
export declare class UpdateScriptTagRequestBody extends SpeakeasyBase {
    scriptTag?: UpdateScriptTagRequestBodyScriptTag;
}
export declare class UpdateScriptTagSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare enum UpdateScriptTag200ApplicationJsonScriptTagDisplayScopeEnum {
    All = "all",
    Shop = "shop",
    ThanksPage = "thanks_page",
    Cart = "cart"
}
export declare class UpdateScriptTag200ApplicationJsonScriptTag extends SpeakeasyBase {
    displayScope?: UpdateScriptTag200ApplicationJsonScriptTagDisplayScopeEnum;
    id?: number;
    makeDate?: number;
    src?: string;
    updateDate?: number;
}
export declare class UpdateScriptTag200ApplicationJson extends SpeakeasyBase {
    scriptTag?: UpdateScriptTag200ApplicationJsonScriptTag;
}
export declare class UpdateScriptTagRequest extends SpeakeasyBase {
    pathParams: UpdateScriptTagPathParams;
    request?: UpdateScriptTagRequestBody;
    security: UpdateScriptTagSecurity;
}
export declare class UpdateScriptTagResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    updateScriptTag200ApplicationJsonObject?: UpdateScriptTag200ApplicationJson;
}
