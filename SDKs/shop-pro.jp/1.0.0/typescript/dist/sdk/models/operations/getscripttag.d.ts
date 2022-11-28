import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetScriptTagPathParams extends SpeakeasyBase {
    scriptTagId: number;
}
export declare class GetScriptTagSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare enum GetScriptTag200ApplicationJsonScriptTagDisplayScopeEnum {
    All = "all",
    Shop = "shop",
    ThanksPage = "thanks_page",
    Cart = "cart"
}
export declare class GetScriptTag200ApplicationJsonScriptTag extends SpeakeasyBase {
    displayScope?: GetScriptTag200ApplicationJsonScriptTagDisplayScopeEnum;
    id?: number;
    makeDate?: number;
    src?: string;
    updateDate?: number;
}
export declare class GetScriptTag200ApplicationJson extends SpeakeasyBase {
    scriptTag?: GetScriptTag200ApplicationJsonScriptTag;
}
export declare class GetScriptTagRequest extends SpeakeasyBase {
    pathParams: GetScriptTagPathParams;
    security: GetScriptTagSecurity;
}
export declare class GetScriptTagResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getScriptTag200ApplicationJsonObject?: GetScriptTag200ApplicationJson;
}
