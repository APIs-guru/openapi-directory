import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetScriptTagPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=scriptTagId" })
  scriptTagId: number;
}


export class GetScriptTagSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class GetScriptTagRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetScriptTagPathParams;

  @Metadata()
  security: GetScriptTagSecurity;
}

export enum GetScriptTag200ApplicationJsonScriptTagDisplayScopeEnum {
    All = "all"
,    Shop = "shop"
,    ThanksPage = "thanks_page"
,    Cart = "cart"
}


export class GetScriptTag200ApplicationJsonScriptTag extends SpeakeasyBase {
  @Metadata({ data: "json, name=display_scope" })
  displayScope?: GetScriptTag200ApplicationJsonScriptTagDisplayScopeEnum;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=make_date" })
  makeDate?: number;

  @Metadata({ data: "json, name=src" })
  src?: string;

  @Metadata({ data: "json, name=update_date" })
  updateDate?: number;
}


export class GetScriptTag200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=script_tag" })
  scriptTag?: GetScriptTag200ApplicationJsonScriptTag;
}


export class GetScriptTagResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getScriptTag200ApplicationJsonObject?: GetScriptTag200ApplicationJson;
}
