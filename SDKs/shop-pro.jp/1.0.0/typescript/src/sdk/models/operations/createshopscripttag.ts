import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum CreateShopScriptTagRequestBodyScriptTagDisplayScopeEnum {
    Shop = "shop"
,    ThanksPage = "thanks_page"
}


export class CreateShopScriptTagRequestBodyScriptTag extends SpeakeasyBase {
  @Metadata({ data: "json, name=display_scope" })
  displayScope?: CreateShopScriptTagRequestBodyScriptTagDisplayScopeEnum;

  @Metadata({ data: "json, name=integrity" })
  integrity?: string;

  @Metadata({ data: "json, name=src" })
  src?: string;
}


export class CreateShopScriptTagRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=script_tag" })
  scriptTag?: CreateShopScriptTagRequestBodyScriptTag;
}


export class CreateShopScriptTagSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class CreateShopScriptTagRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: CreateShopScriptTagRequestBody;

  @Metadata()
  security: CreateShopScriptTagSecurity;
}

export enum CreateShopScriptTag200ApplicationJsonScriptTagDisplayScopeEnum {
    Shop = "shop"
,    ThanksPage = "thanks_page"
}


export class CreateShopScriptTag200ApplicationJsonScriptTag extends SpeakeasyBase {
  @Metadata({ data: "json, name=account_id" })
  accountId?: string;

  @Metadata({ data: "json, name=display_scope" })
  displayScope?: CreateShopScriptTag200ApplicationJsonScriptTagDisplayScopeEnum;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=integrity" })
  integrity?: string;

  @Metadata({ data: "json, name=make_date" })
  makeDate?: number;

  @Metadata({ data: "json, name=oauth_application_id" })
  oauthApplicationId?: number;

  @Metadata({ data: "json, name=src" })
  src?: string;

  @Metadata({ data: "json, name=update_date" })
  updateDate?: number;
}


export class CreateShopScriptTag200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=script_tag" })
  scriptTag?: CreateShopScriptTag200ApplicationJsonScriptTag;
}


export class CreateShopScriptTagResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  createShopScriptTag200ApplicationJsonObject?: CreateShopScriptTag200ApplicationJson;
}
