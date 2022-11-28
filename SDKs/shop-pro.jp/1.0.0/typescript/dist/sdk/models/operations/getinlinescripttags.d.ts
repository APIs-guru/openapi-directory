import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetInlineScriptTagsSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare enum GetInlineScriptTags200ApplicationJsonInlineScriptTagsDisplayScopeEnum {
    All = "all",
    ThanksPage = "thanks_page",
    Cart = "cart"
}
export declare enum GetInlineScriptTags200ApplicationJsonInlineScriptTagsTriggerEventEnum {
    ObjectBuilded = "object_builded"
}
export declare class GetInlineScriptTags200ApplicationJsonInlineScriptTags extends SpeakeasyBase {
    accountId?: string;
    displayScope?: GetInlineScriptTags200ApplicationJsonInlineScriptTagsDisplayScopeEnum;
    id?: number;
    makeDate?: number;
    oauthApplicationId?: number;
    script?: string;
    triggerEvent?: GetInlineScriptTags200ApplicationJsonInlineScriptTagsTriggerEventEnum;
    updateDate?: number;
}
export declare class GetInlineScriptTags200ApplicationJson extends SpeakeasyBase {
    inlineScriptTags?: GetInlineScriptTags200ApplicationJsonInlineScriptTags[];
}
export declare class GetInlineScriptTagsRequest extends SpeakeasyBase {
    security: GetInlineScriptTagsSecurity;
}
export declare class GetInlineScriptTagsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getInlineScriptTags200ApplicationJsonObject?: GetInlineScriptTags200ApplicationJson;
}
