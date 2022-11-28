import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetShopScriptTagsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}

export enum GetShopScriptTags200ApplicationJsonScriptTagsDisplayScopeEnum {
    Shop = "shop",
    ThanksPage = "thanks_page"
}


export class GetShopScriptTags200ApplicationJsonScriptTags extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account_id" })
  accountId?: string;

  @SpeakeasyMetadata({ data: "json, name=display_scope" })
  displayScope?: GetShopScriptTags200ApplicationJsonScriptTagsDisplayScopeEnum;

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


export class GetShopScriptTags200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=script_tags", elemType: GetShopScriptTags200ApplicationJsonScriptTags })
  scriptTags?: GetShopScriptTags200ApplicationJsonScriptTags[];
}


export class GetShopScriptTagsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  security: GetShopScriptTagsSecurity;
}


export class GetShopScriptTagsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getShopScriptTags200ApplicationJsonObject?: GetShopScriptTags200ApplicationJson;
}
