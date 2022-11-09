import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum CreateInlineScriptTagRequestBodyInlineScriptTagDisplayScopeEnum {
    All = "all"
,    ThanksPage = "thanks_page"
,    Cart = "cart"
}

export enum CreateInlineScriptTagRequestBodyInlineScriptTagTriggerEventEnum {
    ObjectBuilded = "object_builded"
}


export class CreateInlineScriptTagRequestBodyInlineScriptTag extends SpeakeasyBase {
  @Metadata({ data: "json, name=display_scope" })
  displayScope?: CreateInlineScriptTagRequestBodyInlineScriptTagDisplayScopeEnum;

  @Metadata({ data: "json, name=script" })
  script?: string;

  @Metadata({ data: "json, name=trigger_event" })
  triggerEvent?: CreateInlineScriptTagRequestBodyInlineScriptTagTriggerEventEnum;
}


export class CreateInlineScriptTagRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=inline_script_tag" })
  inlineScriptTag?: CreateInlineScriptTagRequestBodyInlineScriptTag;
}


export class CreateInlineScriptTagSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class CreateInlineScriptTagRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: CreateInlineScriptTagRequestBody;

  @Metadata()
  security: CreateInlineScriptTagSecurity;
}

export enum CreateInlineScriptTag201ApplicationJsonInlineScriptTagDisplayScopeEnum {
    All = "all"
,    ThanksPage = "thanks_page"
,    Cart = "cart"
}

export enum CreateInlineScriptTag201ApplicationJsonInlineScriptTagTriggerEventEnum {
    ObjectBuilded = "object_builded"
}


export class CreateInlineScriptTag201ApplicationJsonInlineScriptTag extends SpeakeasyBase {
  @Metadata({ data: "json, name=account_id" })
  accountId?: string;

  @Metadata({ data: "json, name=display_scope" })
  displayScope?: CreateInlineScriptTag201ApplicationJsonInlineScriptTagDisplayScopeEnum;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=make_date" })
  makeDate?: number;

  @Metadata({ data: "json, name=oauth_application_id" })
  oauthApplicationId?: number;

  @Metadata({ data: "json, name=script" })
  script?: string;

  @Metadata({ data: "json, name=trigger_event" })
  triggerEvent?: CreateInlineScriptTag201ApplicationJsonInlineScriptTagTriggerEventEnum;

  @Metadata({ data: "json, name=update_date" })
  updateDate?: number;
}


export class CreateInlineScriptTag201ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=inline_script_tag" })
  inlineScriptTag?: CreateInlineScriptTag201ApplicationJsonInlineScriptTag;
}


export class CreateInlineScriptTagResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  createInlineScriptTag201ApplicationJsonObject?: CreateInlineScriptTag201ApplicationJson;
}
