import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateInlineScriptTagPathParams extends SpeakeasyBase {
    inlineScriptTagId: number;
}
export declare enum UpdateInlineScriptTagRequestBodyInlineScriptTagDisplayScopeEnum {
    All = "all",
    ThanksPage = "thanks_page",
    Cart = "cart"
}
export declare enum UpdateInlineScriptTagRequestBodyInlineScriptTagTriggerEventEnum {
    ObjectBuilded = "object_builded"
}
export declare class UpdateInlineScriptTagRequestBodyInlineScriptTag extends SpeakeasyBase {
    displayScope?: UpdateInlineScriptTagRequestBodyInlineScriptTagDisplayScopeEnum;
    script?: string;
    triggerEvent?: UpdateInlineScriptTagRequestBodyInlineScriptTagTriggerEventEnum;
}
export declare class UpdateInlineScriptTagRequestBody extends SpeakeasyBase {
    inlineScriptTag?: UpdateInlineScriptTagRequestBodyInlineScriptTag;
}
export declare class UpdateInlineScriptTagSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare enum UpdateInlineScriptTag200ApplicationJsonInlineScriptTagDisplayScopeEnum {
    All = "all",
    ThanksPage = "thanks_page",
    Cart = "cart"
}
export declare enum UpdateInlineScriptTag200ApplicationJsonInlineScriptTagTriggerEventEnum {
    ObjectBuilded = "object_builded"
}
export declare class UpdateInlineScriptTag200ApplicationJsonInlineScriptTag extends SpeakeasyBase {
    accountId?: string;
    displayScope?: UpdateInlineScriptTag200ApplicationJsonInlineScriptTagDisplayScopeEnum;
    id?: number;
    makeDate?: number;
    oauthApplicationId?: number;
    script?: string;
    triggerEvent?: UpdateInlineScriptTag200ApplicationJsonInlineScriptTagTriggerEventEnum;
    updateDate?: number;
}
export declare class UpdateInlineScriptTag200ApplicationJson extends SpeakeasyBase {
    inlineScriptTag?: UpdateInlineScriptTag200ApplicationJsonInlineScriptTag;
}
export declare class UpdateInlineScriptTagRequest extends SpeakeasyBase {
    pathParams: UpdateInlineScriptTagPathParams;
    request?: UpdateInlineScriptTagRequestBody;
    security: UpdateInlineScriptTagSecurity;
}
export declare class UpdateInlineScriptTagResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    updateInlineScriptTag200ApplicationJsonObject?: UpdateInlineScriptTag200ApplicationJson;
}
