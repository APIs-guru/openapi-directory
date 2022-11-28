import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum CreateScriptTagRequestBodyScriptTagDisplayScopeEnum {
    All = "all",
    Shop = "shop",
    ThanksPage = "thanks_page",
    Cart = "cart"
}


export class CreateScriptTagRequestBodyScriptTag extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=display_scope" })
  displayScope?: CreateScriptTagRequestBodyScriptTagDisplayScopeEnum;

  @SpeakeasyMetadata({ data: "json, name=src" })
  src?: string;
}


export class CreateScriptTagRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=script_tag" })
  scriptTag?: CreateScriptTagRequestBodyScriptTag;
}


export class CreateScriptTagSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}

export enum CreateScriptTag200ApplicationJsonScriptTagDisplayScopeEnum {
    All = "all",
    Shop = "shop",
    ThanksPage = "thanks_page",
    Cart = "cart"
}


export class CreateScriptTag200ApplicationJsonScriptTag extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=display_scope" })
  displayScope?: CreateScriptTag200ApplicationJsonScriptTagDisplayScopeEnum;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=make_date" })
  makeDate?: number;

  @SpeakeasyMetadata({ data: "json, name=src" })
  src?: string;

  @SpeakeasyMetadata({ data: "json, name=update_date" })
  updateDate?: number;
}


export class CreateScriptTag200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=script_tag" })
  scriptTag?: CreateScriptTag200ApplicationJsonScriptTag;
}


export class CreateScriptTagRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: CreateScriptTagRequestBody;

  @SpeakeasyMetadata()
  security: CreateScriptTagSecurity;
}


export class CreateScriptTagResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  createScriptTag200ApplicationJsonObject?: CreateScriptTag200ApplicationJson;
}
