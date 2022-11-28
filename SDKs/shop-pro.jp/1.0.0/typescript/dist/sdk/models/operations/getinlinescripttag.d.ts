import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetInlineScriptTagPathParams extends SpeakeasyBase {
    inlineScriptTagId: number;
}
export declare class GetInlineScriptTagSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare enum GetInlineScriptTag200ApplicationJsonInlineScriptTagDisplayScopeEnum {
    All = "all",
    ThanksPage = "thanks_page",
    Cart = "cart"
}
export declare enum GetInlineScriptTag200ApplicationJsonInlineScriptTagTriggerEventEnum {
    ObjectBuilded = "object_builded"
}
export declare class GetInlineScriptTag200ApplicationJsonInlineScriptTag extends SpeakeasyBase {
    accountId?: string;
    displayScope?: GetInlineScriptTag200ApplicationJsonInlineScriptTagDisplayScopeEnum;
    id?: number;
    makeDate?: number;
    oauthApplicationId?: number;
    script?: string;
    triggerEvent?: GetInlineScriptTag200ApplicationJsonInlineScriptTagTriggerEventEnum;
    updateDate?: number;
}
export declare class GetInlineScriptTag200ApplicationJson extends SpeakeasyBase {
    inlineScriptTag?: GetInlineScriptTag200ApplicationJsonInlineScriptTag;
}
export declare class GetInlineScriptTagRequest extends SpeakeasyBase {
    pathParams: GetInlineScriptTagPathParams;
    security: GetInlineScriptTagSecurity;
}
export declare class GetInlineScriptTagResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getInlineScriptTag200ApplicationJsonObject?: GetInlineScriptTag200ApplicationJson;
}
