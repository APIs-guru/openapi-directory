import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateInlineScriptTagPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=inlineScriptTagId" })
  inlineScriptTagId: number;
}

export enum UpdateInlineScriptTagRequestBodyInlineScriptTagDisplayScopeEnum {
    All = "all",
    ThanksPage = "thanks_page",
    Cart = "cart"
}

export enum UpdateInlineScriptTagRequestBodyInlineScriptTagTriggerEventEnum {
    ObjectBuilded = "object_builded"
}


export class UpdateInlineScriptTagRequestBodyInlineScriptTag extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=display_scope" })
  displayScope?: UpdateInlineScriptTagRequestBodyInlineScriptTagDisplayScopeEnum;

  @SpeakeasyMetadata({ data: "json, name=script" })
  script?: string;

  @SpeakeasyMetadata({ data: "json, name=trigger_event" })
  triggerEvent?: UpdateInlineScriptTagRequestBodyInlineScriptTagTriggerEventEnum;
}


export class UpdateInlineScriptTagRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=inline_script_tag" })
  inlineScriptTag?: UpdateInlineScriptTagRequestBodyInlineScriptTag;
}


export class UpdateInlineScriptTagSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}

export enum UpdateInlineScriptTag200ApplicationJsonInlineScriptTagDisplayScopeEnum {
    All = "all",
    ThanksPage = "thanks_page",
    Cart = "cart"
}

export enum UpdateInlineScriptTag200ApplicationJsonInlineScriptTagTriggerEventEnum {
    ObjectBuilded = "object_builded"
}


export class UpdateInlineScriptTag200ApplicationJsonInlineScriptTag extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account_id" })
  accountId?: string;

  @SpeakeasyMetadata({ data: "json, name=display_scope" })
  displayScope?: UpdateInlineScriptTag200ApplicationJsonInlineScriptTagDisplayScopeEnum;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=make_date" })
  makeDate?: number;

  @SpeakeasyMetadata({ data: "json, name=oauth_application_id" })
  oauthApplicationId?: number;

  @SpeakeasyMetadata({ data: "json, name=script" })
  script?: string;

  @SpeakeasyMetadata({ data: "json, name=trigger_event" })
  triggerEvent?: UpdateInlineScriptTag200ApplicationJsonInlineScriptTagTriggerEventEnum;

  @SpeakeasyMetadata({ data: "json, name=update_date" })
  updateDate?: number;
}


export class UpdateInlineScriptTag200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=inline_script_tag" })
  inlineScriptTag?: UpdateInlineScriptTag200ApplicationJsonInlineScriptTag;
}


export class UpdateInlineScriptTagRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateInlineScriptTagPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: UpdateInlineScriptTagRequestBody;

  @SpeakeasyMetadata()
  security: UpdateInlineScriptTagSecurity;
}


export class UpdateInlineScriptTagResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateInlineScriptTag200ApplicationJsonObject?: UpdateInlineScriptTag200ApplicationJson;
}
