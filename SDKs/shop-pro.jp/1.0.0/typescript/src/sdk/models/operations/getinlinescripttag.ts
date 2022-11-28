import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetInlineScriptTagPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=inlineScriptTagId" })
  inlineScriptTagId: number;
}


export class GetInlineScriptTagSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}

export enum GetInlineScriptTag200ApplicationJsonInlineScriptTagDisplayScopeEnum {
    All = "all",
    ThanksPage = "thanks_page",
    Cart = "cart"
}

export enum GetInlineScriptTag200ApplicationJsonInlineScriptTagTriggerEventEnum {
    ObjectBuilded = "object_builded"
}


export class GetInlineScriptTag200ApplicationJsonInlineScriptTag extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account_id" })
  accountId?: string;

  @SpeakeasyMetadata({ data: "json, name=display_scope" })
  displayScope?: GetInlineScriptTag200ApplicationJsonInlineScriptTagDisplayScopeEnum;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=make_date" })
  makeDate?: number;

  @SpeakeasyMetadata({ data: "json, name=oauth_application_id" })
  oauthApplicationId?: number;

  @SpeakeasyMetadata({ data: "json, name=script" })
  script?: string;

  @SpeakeasyMetadata({ data: "json, name=trigger_event" })
  triggerEvent?: GetInlineScriptTag200ApplicationJsonInlineScriptTagTriggerEventEnum;

  @SpeakeasyMetadata({ data: "json, name=update_date" })
  updateDate?: number;
}


export class GetInlineScriptTag200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=inline_script_tag" })
  inlineScriptTag?: GetInlineScriptTag200ApplicationJsonInlineScriptTag;
}


export class GetInlineScriptTagRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetInlineScriptTagPathParams;

  @SpeakeasyMetadata()
  security: GetInlineScriptTagSecurity;
}


export class GetInlineScriptTagResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getInlineScriptTag200ApplicationJsonObject?: GetInlineScriptTag200ApplicationJson;
}
