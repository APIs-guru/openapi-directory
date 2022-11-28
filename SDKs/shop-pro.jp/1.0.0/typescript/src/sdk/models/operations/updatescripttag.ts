import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateScriptTagPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=scriptTagId" })
  scriptTagId: number;
}

export enum UpdateScriptTagRequestBodyScriptTagDisplayScopeEnum {
    All = "all",
    Shop = "shop",
    ThanksPage = "thanks_page",
    Cart = "cart"
}


export class UpdateScriptTagRequestBodyScriptTag extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=display_scope" })
  displayScope?: UpdateScriptTagRequestBodyScriptTagDisplayScopeEnum;

  @SpeakeasyMetadata({ data: "json, name=src" })
  src?: string;
}


export class UpdateScriptTagRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=script_tag" })
  scriptTag?: UpdateScriptTagRequestBodyScriptTag;
}


export class UpdateScriptTagSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}

export enum UpdateScriptTag200ApplicationJsonScriptTagDisplayScopeEnum {
    All = "all",
    Shop = "shop",
    ThanksPage = "thanks_page",
    Cart = "cart"
}


export class UpdateScriptTag200ApplicationJsonScriptTag extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=display_scope" })
  displayScope?: UpdateScriptTag200ApplicationJsonScriptTagDisplayScopeEnum;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=make_date" })
  makeDate?: number;

  @SpeakeasyMetadata({ data: "json, name=src" })
  src?: string;

  @SpeakeasyMetadata({ data: "json, name=update_date" })
  updateDate?: number;
}


export class UpdateScriptTag200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=script_tag" })
  scriptTag?: UpdateScriptTag200ApplicationJsonScriptTag;
}


export class UpdateScriptTagRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateScriptTagPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: UpdateScriptTagRequestBody;

  @SpeakeasyMetadata()
  security: UpdateScriptTagSecurity;
}


export class UpdateScriptTagResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateScriptTag200ApplicationJsonObject?: UpdateScriptTag200ApplicationJson;
}
