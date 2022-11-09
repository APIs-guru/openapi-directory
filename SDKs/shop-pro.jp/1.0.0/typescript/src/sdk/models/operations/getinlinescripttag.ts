import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetInlineScriptTagPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=inlineScriptTagId" })
  inlineScriptTagId: number;
}


export class GetInlineScriptTagSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class GetInlineScriptTagRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetInlineScriptTagPathParams;

  @Metadata()
  security: GetInlineScriptTagSecurity;
}

export enum GetInlineScriptTag200ApplicationJsonInlineScriptTagDisplayScopeEnum {
    All = "all"
,    ThanksPage = "thanks_page"
,    Cart = "cart"
}

export enum GetInlineScriptTag200ApplicationJsonInlineScriptTagTriggerEventEnum {
    ObjectBuilded = "object_builded"
}


export class GetInlineScriptTag200ApplicationJsonInlineScriptTag extends SpeakeasyBase {
  @Metadata({ data: "json, name=account_id" })
  accountId?: string;

  @Metadata({ data: "json, name=display_scope" })
  displayScope?: GetInlineScriptTag200ApplicationJsonInlineScriptTagDisplayScopeEnum;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=make_date" })
  makeDate?: number;

  @Metadata({ data: "json, name=oauth_application_id" })
  oauthApplicationId?: number;

  @Metadata({ data: "json, name=script" })
  script?: string;

  @Metadata({ data: "json, name=trigger_event" })
  triggerEvent?: GetInlineScriptTag200ApplicationJsonInlineScriptTagTriggerEventEnum;

  @Metadata({ data: "json, name=update_date" })
  updateDate?: number;
}


export class GetInlineScriptTag200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=inline_script_tag" })
  inlineScriptTag?: GetInlineScriptTag200ApplicationJsonInlineScriptTag;
}


export class GetInlineScriptTagResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getInlineScriptTag200ApplicationJsonObject?: GetInlineScriptTag200ApplicationJson;
}
