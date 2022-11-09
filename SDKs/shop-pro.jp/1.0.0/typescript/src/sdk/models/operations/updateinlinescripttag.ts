import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateInlineScriptTagPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=inlineScriptTagId" })
  inlineScriptTagId: number;
}

export enum UpdateInlineScriptTagRequestBodyInlineScriptTagDisplayScopeEnum {
    All = "all"
,    ThanksPage = "thanks_page"
,    Cart = "cart"
}

export enum UpdateInlineScriptTagRequestBodyInlineScriptTagTriggerEventEnum {
    ObjectBuilded = "object_builded"
}


export class UpdateInlineScriptTagRequestBodyInlineScriptTag extends SpeakeasyBase {
  @Metadata({ data: "json, name=display_scope" })
  displayScope?: UpdateInlineScriptTagRequestBodyInlineScriptTagDisplayScopeEnum;

  @Metadata({ data: "json, name=script" })
  script?: string;

  @Metadata({ data: "json, name=trigger_event" })
  triggerEvent?: UpdateInlineScriptTagRequestBodyInlineScriptTagTriggerEventEnum;
}


export class UpdateInlineScriptTagRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=inline_script_tag" })
  inlineScriptTag?: UpdateInlineScriptTagRequestBodyInlineScriptTag;
}


export class UpdateInlineScriptTagSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class UpdateInlineScriptTagRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateInlineScriptTagPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: UpdateInlineScriptTagRequestBody;

  @Metadata()
  security: UpdateInlineScriptTagSecurity;
}

export enum UpdateInlineScriptTag200ApplicationJsonInlineScriptTagDisplayScopeEnum {
    All = "all"
,    ThanksPage = "thanks_page"
,    Cart = "cart"
}

export enum UpdateInlineScriptTag200ApplicationJsonInlineScriptTagTriggerEventEnum {
    ObjectBuilded = "object_builded"
}


export class UpdateInlineScriptTag200ApplicationJsonInlineScriptTag extends SpeakeasyBase {
  @Metadata({ data: "json, name=account_id" })
  accountId?: string;

  @Metadata({ data: "json, name=display_scope" })
  displayScope?: UpdateInlineScriptTag200ApplicationJsonInlineScriptTagDisplayScopeEnum;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=make_date" })
  makeDate?: number;

  @Metadata({ data: "json, name=oauth_application_id" })
  oauthApplicationId?: number;

  @Metadata({ data: "json, name=script" })
  script?: string;

  @Metadata({ data: "json, name=trigger_event" })
  triggerEvent?: UpdateInlineScriptTag200ApplicationJsonInlineScriptTagTriggerEventEnum;

  @Metadata({ data: "json, name=update_date" })
  updateDate?: number;
}


export class UpdateInlineScriptTag200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=inline_script_tag" })
  inlineScriptTag?: UpdateInlineScriptTag200ApplicationJsonInlineScriptTag;
}


export class UpdateInlineScriptTagResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateInlineScriptTag200ApplicationJsonObject?: UpdateInlineScriptTag200ApplicationJson;
}
