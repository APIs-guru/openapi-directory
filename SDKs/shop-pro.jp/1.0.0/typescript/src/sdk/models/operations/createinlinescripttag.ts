import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum CreateInlineScriptTagRequestBodyInlineScriptTagDisplayScopeEnum {
    All = "all",
    ThanksPage = "thanks_page",
    Cart = "cart"
}

export enum CreateInlineScriptTagRequestBodyInlineScriptTagTriggerEventEnum {
    ObjectBuilded = "object_builded"
}


export class CreateInlineScriptTagRequestBodyInlineScriptTag extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=display_scope" })
  displayScope?: CreateInlineScriptTagRequestBodyInlineScriptTagDisplayScopeEnum;

  @SpeakeasyMetadata({ data: "json, name=script" })
  script?: string;

  @SpeakeasyMetadata({ data: "json, name=trigger_event" })
  triggerEvent?: CreateInlineScriptTagRequestBodyInlineScriptTagTriggerEventEnum;
}


export class CreateInlineScriptTagRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=inline_script_tag" })
  inlineScriptTag?: CreateInlineScriptTagRequestBodyInlineScriptTag;
}


export class CreateInlineScriptTagSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}

export enum CreateInlineScriptTag201ApplicationJsonInlineScriptTagDisplayScopeEnum {
    All = "all",
    ThanksPage = "thanks_page",
    Cart = "cart"
}

export enum CreateInlineScriptTag201ApplicationJsonInlineScriptTagTriggerEventEnum {
    ObjectBuilded = "object_builded"
}


export class CreateInlineScriptTag201ApplicationJsonInlineScriptTag extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account_id" })
  accountId?: string;

  @SpeakeasyMetadata({ data: "json, name=display_scope" })
  displayScope?: CreateInlineScriptTag201ApplicationJsonInlineScriptTagDisplayScopeEnum;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=make_date" })
  makeDate?: number;

  @SpeakeasyMetadata({ data: "json, name=oauth_application_id" })
  oauthApplicationId?: number;

  @SpeakeasyMetadata({ data: "json, name=script" })
  script?: string;

  @SpeakeasyMetadata({ data: "json, name=trigger_event" })
  triggerEvent?: CreateInlineScriptTag201ApplicationJsonInlineScriptTagTriggerEventEnum;

  @SpeakeasyMetadata({ data: "json, name=update_date" })
  updateDate?: number;
}


export class CreateInlineScriptTag201ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=inline_script_tag" })
  inlineScriptTag?: CreateInlineScriptTag201ApplicationJsonInlineScriptTag;
}


export class CreateInlineScriptTagRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: CreateInlineScriptTagRequestBody;

  @SpeakeasyMetadata()
  security: CreateInlineScriptTagSecurity;
}


export class CreateInlineScriptTagResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  createInlineScriptTag201ApplicationJsonObject?: CreateInlineScriptTag201ApplicationJson;
}
