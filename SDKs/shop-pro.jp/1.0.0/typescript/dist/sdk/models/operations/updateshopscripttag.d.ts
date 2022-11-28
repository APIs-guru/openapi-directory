import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateShopScriptTagPathParams extends SpeakeasyBase {
    scriptTagId: number;
}
export declare enum UpdateShopScriptTagRequestBodyScriptTagDisplayScopeEnum {
    Shop = "shop",
    ThanksPage = "thanks_page"
}
export declare class UpdateShopScriptTagRequestBodyScriptTag extends SpeakeasyBase {
    displayScope?: UpdateShopScriptTagRequestBodyScriptTagDisplayScopeEnum;
    integrity?: string;
    src?: string;
}
export declare class UpdateShopScriptTagRequestBody extends SpeakeasyBase {
    scriptTag?: UpdateShopScriptTagRequestBodyScriptTag;
}
export declare class UpdateShopScriptTagSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare enum UpdateShopScriptTag200ApplicationJsonScriptTagDisplayScopeEnum {
    Shop = "shop",
    ThanksPage = "thanks_page"
}
export declare class UpdateShopScriptTag200ApplicationJsonScriptTag extends SpeakeasyBase {
    accountId?: string;
    displayScope?: UpdateShopScriptTag200ApplicationJsonScriptTagDisplayScopeEnum;
    id?: number;
    integrity?: string;
    makeDate?: number;
    oauthApplicationId?: number;
    src?: string;
    updateDate?: number;
}
export declare class UpdateShopScriptTag200ApplicationJson extends SpeakeasyBase {
    scriptTag?: UpdateShopScriptTag200ApplicationJsonScriptTag;
}
export declare class UpdateShopScriptTagRequest extends SpeakeasyBase {
    pathParams: UpdateShopScriptTagPathParams;
    request?: UpdateShopScriptTagRequestBody;
    security: UpdateShopScriptTagSecurity;
}
export declare class UpdateShopScriptTagResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    updateShopScriptTag200ApplicationJsonObject?: UpdateShopScriptTag200ApplicationJson;
}
