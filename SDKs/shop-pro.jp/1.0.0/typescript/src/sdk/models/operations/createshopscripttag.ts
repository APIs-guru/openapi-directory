import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum CreateShopScriptTagRequestBodyScriptTagDisplayScopeEnum {
    Shop = "shop",
    ThanksPage = "thanks_page"
}


export class CreateShopScriptTagRequestBodyScriptTag extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=display_scope" })
  displayScope?: CreateShopScriptTagRequestBodyScriptTagDisplayScopeEnum;

  @SpeakeasyMetadata({ data: "json, name=integrity" })
  integrity?: string;

  @SpeakeasyMetadata({ data: "json, name=src" })
  src?: string;
}


export class CreateShopScriptTagRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=script_tag" })
  scriptTag?: CreateShopScriptTagRequestBodyScriptTag;
}


export class CreateShopScriptTagSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}

export enum CreateShopScriptTag200ApplicationJsonScriptTagDisplayScopeEnum {
    Shop = "shop",
    ThanksPage = "thanks_page"
}


export class CreateShopScriptTag200ApplicationJsonScriptTag extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account_id" })
  accountId?: string;

  @SpeakeasyMetadata({ data: "json, name=display_scope" })
  displayScope?: CreateShopScriptTag200ApplicationJsonScriptTagDisplayScopeEnum;

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


export class CreateShopScriptTag200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=script_tag" })
  scriptTag?: CreateShopScriptTag200ApplicationJsonScriptTag;
}


export class CreateShopScriptTagRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: CreateShopScriptTagRequestBody;

  @SpeakeasyMetadata()
  security: CreateShopScriptTagSecurity;
}


export class CreateShopScriptTagResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  createShopScriptTag200ApplicationJsonObject?: CreateShopScriptTag200ApplicationJson;
}
