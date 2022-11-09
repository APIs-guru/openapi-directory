import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetScriptTagsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class GetScriptTagsRequest extends SpeakeasyBase {
  @Metadata()
  security: GetScriptTagsSecurity;
}

export enum GetScriptTags200ApplicationJsonScriptTagsDisplayScopeEnum {
    All = "all"
,    Shop = "shop"
,    ThanksPage = "thanks_page"
,    Cart = "cart"
}


export class GetScriptTags200ApplicationJsonScriptTags extends SpeakeasyBase {
  @Metadata({ data: "json, name=display_scope" })
  displayScope?: GetScriptTags200ApplicationJsonScriptTagsDisplayScopeEnum;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=make_date" })
  makeDate?: number;

  @Metadata({ data: "json, name=src" })
  src?: string;

  @Metadata({ data: "json, name=update_date" })
  updateDate?: number;
}


export class GetScriptTags200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=script_tags", elemType: operations.GetScriptTags200ApplicationJsonScriptTags })
  scriptTags?: GetScriptTags200ApplicationJsonScriptTags[];
}


export class GetScriptTagsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getScriptTags200ApplicationJsonObject?: GetScriptTags200ApplicationJson;
}
