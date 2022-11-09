import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateShopScriptTagPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=scriptTagId" })
  scriptTagId: number;
}

export enum UpdateShopScriptTagRequestBodyScriptTagDisplayScopeEnum {
    Shop = "shop"
,    ThanksPage = "thanks_page"
}


export class UpdateShopScriptTagRequestBodyScriptTag extends SpeakeasyBase {
  @Metadata({ data: "json, name=display_scope" })
  displayScope?: UpdateShopScriptTagRequestBodyScriptTagDisplayScopeEnum;

  @Metadata({ data: "json, name=integrity" })
  integrity?: string;

  @Metadata({ data: "json, name=src" })
  src?: string;
}


export class UpdateShopScriptTagRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=script_tag" })
  scriptTag?: UpdateShopScriptTagRequestBodyScriptTag;
}


export class UpdateShopScriptTagSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class UpdateShopScriptTagRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateShopScriptTagPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: UpdateShopScriptTagRequestBody;

  @Metadata()
  security: UpdateShopScriptTagSecurity;
}

export enum UpdateShopScriptTag200ApplicationJsonScriptTagDisplayScopeEnum {
    Shop = "shop"
,    ThanksPage = "thanks_page"
}


export class UpdateShopScriptTag200ApplicationJsonScriptTag extends SpeakeasyBase {
  @Metadata({ data: "json, name=account_id" })
  accountId?: string;

  @Metadata({ data: "json, name=display_scope" })
  displayScope?: UpdateShopScriptTag200ApplicationJsonScriptTagDisplayScopeEnum;

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


export class UpdateShopScriptTag200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=script_tag" })
  scriptTag?: UpdateShopScriptTag200ApplicationJsonScriptTag;
}


export class UpdateShopScriptTagResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateShopScriptTag200ApplicationJsonObject?: UpdateShopScriptTag200ApplicationJson;
}
