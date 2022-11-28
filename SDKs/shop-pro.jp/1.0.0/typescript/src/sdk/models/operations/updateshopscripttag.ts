import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateShopScriptTagPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=scriptTagId" })
  scriptTagId: number;
}

export enum UpdateShopScriptTagRequestBodyScriptTagDisplayScopeEnum {
    Shop = "shop",
    ThanksPage = "thanks_page"
}


export class UpdateShopScriptTagRequestBodyScriptTag extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=display_scope" })
  displayScope?: UpdateShopScriptTagRequestBodyScriptTagDisplayScopeEnum;

  @SpeakeasyMetadata({ data: "json, name=integrity" })
  integrity?: string;

  @SpeakeasyMetadata({ data: "json, name=src" })
  src?: string;
}


export class UpdateShopScriptTagRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=script_tag" })
  scriptTag?: UpdateShopScriptTagRequestBodyScriptTag;
}


export class UpdateShopScriptTagSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}

export enum UpdateShopScriptTag200ApplicationJsonScriptTagDisplayScopeEnum {
    Shop = "shop",
    ThanksPage = "thanks_page"
}


export class UpdateShopScriptTag200ApplicationJsonScriptTag extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account_id" })
  accountId?: string;

  @SpeakeasyMetadata({ data: "json, name=display_scope" })
  displayScope?: UpdateShopScriptTag200ApplicationJsonScriptTagDisplayScopeEnum;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=integrity" })
  integrity?: string;

  @SpeakeasyMetadata({ data: "json, name=make_date" })
  makeDate?: number;

  @SpeakeasyMetadata({ data: "json, name=oauth_application_id" })
  oauthApplicationId?: number;

  @SpeakeasyMetadata({ data: "json, name=src" })
  src?: string;

  @SpeakeasyMetadata({ data: "json, name=update_date" })
  updateDate?: number;
}


export class UpdateShopScriptTag200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=script_tag" })
  scriptTag?: UpdateShopScriptTag200ApplicationJsonScriptTag;
}


export class UpdateShopScriptTagRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateShopScriptTagPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: UpdateShopScriptTagRequestBody;

  @SpeakeasyMetadata()
  security: UpdateShopScriptTagSecurity;
}


export class UpdateShopScriptTagResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateShopScriptTag200ApplicationJsonObject?: UpdateShopScriptTag200ApplicationJson;
}
