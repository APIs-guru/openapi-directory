import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetScriptTagsSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare enum GetScriptTags200ApplicationJsonScriptTagsDisplayScopeEnum {
    All = "all",
    Shop = "shop",
    ThanksPage = "thanks_page",
    Cart = "cart"
}
export declare class GetScriptTags200ApplicationJsonScriptTags extends SpeakeasyBase {
    displayScope?: GetScriptTags200ApplicationJsonScriptTagsDisplayScopeEnum;
    id?: number;
    makeDate?: number;
    src?: string;
    updateDate?: number;
}
export declare class GetScriptTags200ApplicationJson extends SpeakeasyBase {
    scriptTags?: GetScriptTags200ApplicationJsonScriptTags[];
}
export declare class GetScriptTagsRequest extends SpeakeasyBase {
    security: GetScriptTagsSecurity;
}
export declare class GetScriptTagsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getScriptTags200ApplicationJsonObject?: GetScriptTags200ApplicationJson;
}
