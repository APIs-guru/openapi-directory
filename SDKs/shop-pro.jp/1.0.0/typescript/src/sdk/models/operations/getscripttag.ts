import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetScriptTagPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=scriptTagId" })
  scriptTagId: number;
}


export class GetScriptTagSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}

export enum GetScriptTag200ApplicationJsonScriptTagDisplayScopeEnum {
    All = "all",
    Shop = "shop",
    ThanksPage = "thanks_page",
    Cart = "cart"
}


export class GetScriptTag200ApplicationJsonScriptTag extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=display_scope" })
  displayScope?: GetScriptTag200ApplicationJsonScriptTagDisplayScopeEnum;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=make_date" })
  makeDate?: number;

  @SpeakeasyMetadata({ data: "json, name=src" })
  src?: string;

  @SpeakeasyMetadata({ data: "json, name=update_date" })
  updateDate?: number;
}


export class GetScriptTag200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=script_tag" })
  scriptTag?: GetScriptTag200ApplicationJsonScriptTag;
}


export class GetScriptTagRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetScriptTagPathParams;

  @SpeakeasyMetadata()
  security: GetScriptTagSecurity;
}


export class GetScriptTagResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getScriptTag200ApplicationJsonObject?: GetScriptTag200ApplicationJson;
}
