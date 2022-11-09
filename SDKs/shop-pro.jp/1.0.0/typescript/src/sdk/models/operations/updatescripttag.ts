import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateScriptTagPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=scriptTagId" })
  scriptTagId: number;
}

export enum UpdateScriptTagRequestBodyScriptTagDisplayScopeEnum {
    All = "all"
,    Shop = "shop"
,    ThanksPage = "thanks_page"
,    Cart = "cart"
}


export class UpdateScriptTagRequestBodyScriptTag extends SpeakeasyBase {
  @Metadata({ data: "json, name=display_scope" })
  displayScope?: UpdateScriptTagRequestBodyScriptTagDisplayScopeEnum;

  @Metadata({ data: "json, name=src" })
  src?: string;
}


export class UpdateScriptTagRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=script_tag" })
  scriptTag?: UpdateScriptTagRequestBodyScriptTag;
}


export class UpdateScriptTagSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class UpdateScriptTagRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateScriptTagPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: UpdateScriptTagRequestBody;

  @Metadata()
  security: UpdateScriptTagSecurity;
}

export enum UpdateScriptTag200ApplicationJsonScriptTagDisplayScopeEnum {
    All = "all"
,    Shop = "shop"
,    ThanksPage = "thanks_page"
,    Cart = "cart"
}


export class UpdateScriptTag200ApplicationJsonScriptTag extends SpeakeasyBase {
  @Metadata({ data: "json, name=display_scope" })
  displayScope?: UpdateScriptTag200ApplicationJsonScriptTagDisplayScopeEnum;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=make_date" })
  makeDate?: number;

  @Metadata({ data: "json, name=src" })
  src?: string;

  @Metadata({ data: "json, name=update_date" })
  updateDate?: number;
}


export class UpdateScriptTag200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=script_tag" })
  scriptTag?: UpdateScriptTag200ApplicationJsonScriptTag;
}


export class UpdateScriptTagResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateScriptTag200ApplicationJsonObject?: UpdateScriptTag200ApplicationJson;
}
