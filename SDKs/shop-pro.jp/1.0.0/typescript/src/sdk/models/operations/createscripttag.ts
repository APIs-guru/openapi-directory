import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum CreateScriptTagRequestBodyScriptTagDisplayScopeEnum {
    All = "all"
,    Shop = "shop"
,    ThanksPage = "thanks_page"
,    Cart = "cart"
}


export class CreateScriptTagRequestBodyScriptTag extends SpeakeasyBase {
  @Metadata({ data: "json, name=display_scope" })
  displayScope?: CreateScriptTagRequestBodyScriptTagDisplayScopeEnum;

  @Metadata({ data: "json, name=src" })
  src?: string;
}


export class CreateScriptTagRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=script_tag" })
  scriptTag?: CreateScriptTagRequestBodyScriptTag;
}


export class CreateScriptTagSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class CreateScriptTagRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: CreateScriptTagRequestBody;

  @Metadata()
  security: CreateScriptTagSecurity;
}

export enum CreateScriptTag200ApplicationJsonScriptTagDisplayScopeEnum {
    All = "all"
,    Shop = "shop"
,    ThanksPage = "thanks_page"
,    Cart = "cart"
}


export class CreateScriptTag200ApplicationJsonScriptTag extends SpeakeasyBase {
  @Metadata({ data: "json, name=display_scope" })
  displayScope?: CreateScriptTag200ApplicationJsonScriptTagDisplayScopeEnum;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=make_date" })
  makeDate?: number;

  @Metadata({ data: "json, name=src" })
  src?: string;

  @Metadata({ data: "json, name=update_date" })
  updateDate?: number;
}


export class CreateScriptTag200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=script_tag" })
  scriptTag?: CreateScriptTag200ApplicationJsonScriptTag;
}


export class CreateScriptTagResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  createScriptTag200ApplicationJsonObject?: CreateScriptTag200ApplicationJson;
}
