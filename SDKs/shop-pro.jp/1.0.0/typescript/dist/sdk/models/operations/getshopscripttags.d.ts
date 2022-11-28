import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetShopScriptTagsSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare enum GetShopScriptTags200ApplicationJsonScriptTagsDisplayScopeEnum {
    Shop = "shop",
    ThanksPage = "thanks_page"
}
export declare class GetShopScriptTags200ApplicationJsonScriptTags extends SpeakeasyBase {
    accountId?: string;
    displayScope?: GetShopScriptTags200ApplicationJsonScriptTagsDisplayScopeEnum;
    id?: number;
    integrity?: string;
    makeDate?: number;
    oauthApplicationId?: number;
    src?: string;
    updateDate?: number;
}
export declare class GetShopScriptTags200ApplicationJson extends SpeakeasyBase {
    scriptTags?: GetShopScriptTags200ApplicationJsonScriptTags[];
}
export declare class GetShopScriptTagsRequest extends SpeakeasyBase {
    security: GetShopScriptTagsSecurity;
}
export declare class GetShopScriptTagsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getShopScriptTags200ApplicationJsonObject?: GetShopScriptTags200ApplicationJson;
}
