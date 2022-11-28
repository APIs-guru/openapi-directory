import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateScriptTagRequestBodyScriptTagDisplayScopeEnum {
    All = "all",
    Shop = "shop",
    ThanksPage = "thanks_page",
    Cart = "cart"
}
export declare class CreateScriptTagRequestBodyScriptTag extends SpeakeasyBase {
    displayScope?: CreateScriptTagRequestBodyScriptTagDisplayScopeEnum;
    src?: string;
}
export declare class CreateScriptTagRequestBody extends SpeakeasyBase {
    scriptTag?: CreateScriptTagRequestBodyScriptTag;
}
export declare class CreateScriptTagSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare enum CreateScriptTag200ApplicationJsonScriptTagDisplayScopeEnum {
    All = "all",
    Shop = "shop",
    ThanksPage = "thanks_page",
    Cart = "cart"
}
export declare class CreateScriptTag200ApplicationJsonScriptTag extends SpeakeasyBase {
    displayScope?: CreateScriptTag200ApplicationJsonScriptTagDisplayScopeEnum;
    id?: number;
    makeDate?: number;
    src?: string;
    updateDate?: number;
}
export declare class CreateScriptTag200ApplicationJson extends SpeakeasyBase {
    scriptTag?: CreateScriptTag200ApplicationJsonScriptTag;
}
export declare class CreateScriptTagRequest extends SpeakeasyBase {
    request?: CreateScriptTagRequestBody;
    security: CreateScriptTagSecurity;
}
export declare class CreateScriptTagResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    createScriptTag200ApplicationJsonObject?: CreateScriptTag200ApplicationJson;
}
