import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateShopScriptTagRequestBodyScriptTagDisplayScopeEnum {
    Shop = "shop",
    ThanksPage = "thanks_page"
}
export declare class CreateShopScriptTagRequestBodyScriptTag extends SpeakeasyBase {
    displayScope?: CreateShopScriptTagRequestBodyScriptTagDisplayScopeEnum;
    integrity?: string;
    src?: string;
}
export declare class CreateShopScriptTagRequestBody extends SpeakeasyBase {
    scriptTag?: CreateShopScriptTagRequestBodyScriptTag;
}
export declare class CreateShopScriptTagSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare enum CreateShopScriptTag200ApplicationJsonScriptTagDisplayScopeEnum {
    Shop = "shop",
    ThanksPage = "thanks_page"
}
export declare class CreateShopScriptTag200ApplicationJsonScriptTag extends SpeakeasyBase {
    accountId?: string;
    displayScope?: CreateShopScriptTag200ApplicationJsonScriptTagDisplayScopeEnum;
    id?: number;
    integrity?: string;
    makeDate?: number;
    oauthApplicationId?: number;
    src?: string;
    updateDate?: number;
}
export declare class CreateShopScriptTag200ApplicationJson extends SpeakeasyBase {
    scriptTag?: CreateShopScriptTag200ApplicationJsonScriptTag;
}
export declare class CreateShopScriptTagRequest extends SpeakeasyBase {
    request?: CreateShopScriptTagRequestBody;
    security: CreateShopScriptTagSecurity;
}
export declare class CreateShopScriptTagResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    createShopScriptTag200ApplicationJsonObject?: CreateShopScriptTag200ApplicationJson;
}
