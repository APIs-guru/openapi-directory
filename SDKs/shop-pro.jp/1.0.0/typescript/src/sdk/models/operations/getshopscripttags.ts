import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetShopScriptTagsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class GetShopScriptTagsRequest extends SpeakeasyBase {
  @Metadata()
  security: GetShopScriptTagsSecurity;
}

export enum GetShopScriptTags200ApplicationJsonScriptTagsDisplayScopeEnum {
    Shop = "shop"
,    ThanksPage = "thanks_page"
}


export class GetShopScriptTags200ApplicationJsonScriptTags extends SpeakeasyBase {
  @Metadata({ data: "json, name=account_id" })
  accountId?: string;

  @Metadata({ data: "json, name=display_scope" })
  displayScope?: GetShopScriptTags200ApplicationJsonScriptTagsDisplayScopeEnum;

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


export class GetShopScriptTags200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=script_tags", elemType: operations.GetShopScriptTags200ApplicationJsonScriptTags })
  scriptTags?: GetShopScriptTags200ApplicationJsonScriptTags[];
}


export class GetShopScriptTagsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getShopScriptTags200ApplicationJsonObject?: GetShopScriptTags200ApplicationJson;
}
