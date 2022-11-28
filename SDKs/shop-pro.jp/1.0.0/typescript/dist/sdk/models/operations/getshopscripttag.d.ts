import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetShopScriptTagPathParams extends SpeakeasyBase {
    scriptTagId: number;
}
export declare class GetShopScriptTagSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare enum GetShopScriptTag200ApplicationJsonScriptTagDisplayScopeEnum {
    Shop = "shop",
    ThanksPage = "thanks_page"
}
export declare class GetShopScriptTag200ApplicationJsonScriptTag extends SpeakeasyBase {
    accountId?: string;
    displayScope?: GetShopScriptTag200ApplicationJsonScriptTagDisplayScopeEnum;
    id?: number;
    integrity?: string;
    makeDate?: number;
    oauthApplicationId?: number;
    src?: string;
    updateDate?: number;
}
export declare class GetShopScriptTag200ApplicationJson extends SpeakeasyBase {
    scriptTag?: GetShopScriptTag200ApplicationJsonScriptTag;
}
export declare class GetShopScriptTagRequest extends SpeakeasyBase {
    pathParams: GetShopScriptTagPathParams;
    security: GetShopScriptTagSecurity;
}
export declare class GetShopScriptTagResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getShopScriptTag200ApplicationJsonObject?: GetShopScriptTag200ApplicationJson;
}
