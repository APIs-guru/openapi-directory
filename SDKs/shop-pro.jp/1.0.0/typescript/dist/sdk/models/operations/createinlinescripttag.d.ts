import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateInlineScriptTagRequestBodyInlineScriptTagDisplayScopeEnum {
    All = "all",
    ThanksPage = "thanks_page",
    Cart = "cart"
}
export declare enum CreateInlineScriptTagRequestBodyInlineScriptTagTriggerEventEnum {
    ObjectBuilded = "object_builded"
}
export declare class CreateInlineScriptTagRequestBodyInlineScriptTag extends SpeakeasyBase {
    displayScope?: CreateInlineScriptTagRequestBodyInlineScriptTagDisplayScopeEnum;
    script?: string;
    triggerEvent?: CreateInlineScriptTagRequestBodyInlineScriptTagTriggerEventEnum;
}
export declare class CreateInlineScriptTagRequestBody extends SpeakeasyBase {
    inlineScriptTag?: CreateInlineScriptTagRequestBodyInlineScriptTag;
}
export declare class CreateInlineScriptTagSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare enum CreateInlineScriptTag201ApplicationJsonInlineScriptTagDisplayScopeEnum {
    All = "all",
    ThanksPage = "thanks_page",
    Cart = "cart"
}
export declare enum CreateInlineScriptTag201ApplicationJsonInlineScriptTagTriggerEventEnum {
    ObjectBuilded = "object_builded"
}
export declare class CreateInlineScriptTag201ApplicationJsonInlineScriptTag extends SpeakeasyBase {
    accountId?: string;
    displayScope?: CreateInlineScriptTag201ApplicationJsonInlineScriptTagDisplayScopeEnum;
    id?: number;
    makeDate?: number;
    oauthApplicationId?: number;
    script?: string;
    triggerEvent?: CreateInlineScriptTag201ApplicationJsonInlineScriptTagTriggerEventEnum;
    updateDate?: number;
}
export declare class CreateInlineScriptTag201ApplicationJson extends SpeakeasyBase {
    inlineScriptTag?: CreateInlineScriptTag201ApplicationJsonInlineScriptTag;
}
export declare class CreateInlineScriptTagRequest extends SpeakeasyBase {
    request?: CreateInlineScriptTagRequestBody;
    security: CreateInlineScriptTagSecurity;
}
export declare class CreateInlineScriptTagResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    createInlineScriptTag201ApplicationJsonObject?: CreateInlineScriptTag201ApplicationJson;
}
