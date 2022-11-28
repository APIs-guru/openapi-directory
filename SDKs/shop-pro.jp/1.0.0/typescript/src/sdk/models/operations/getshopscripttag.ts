import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetShopScriptTagPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=scriptTagId" })
  scriptTagId: number;
}


export class GetShopScriptTagSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}

export enum GetShopScriptTag200ApplicationJsonScriptTagDisplayScopeEnum {
    Shop = "shop",
    ThanksPage = "thanks_page"
}


export class GetShopScriptTag200ApplicationJsonScriptTag extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account_id" })
  accountId?: string;

  @SpeakeasyMetadata({ data: "json, name=display_scope" })
  displayScope?: GetShopScriptTag200ApplicationJsonScriptTagDisplayScopeEnum;

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


export class GetShopScriptTag200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=script_tag" })
  scriptTag?: GetShopScriptTag200ApplicationJsonScriptTag;
}


export class GetShopScriptTagRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetShopScriptTagPathParams;

  @SpeakeasyMetadata()
  security: GetShopScriptTagSecurity;
}


export class GetShopScriptTagResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getShopScriptTag200ApplicationJsonObject?: GetShopScriptTag200ApplicationJson;
}
