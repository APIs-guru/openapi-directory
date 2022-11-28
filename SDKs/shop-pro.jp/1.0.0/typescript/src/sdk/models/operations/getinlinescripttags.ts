import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetInlineScriptTagsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}

export enum GetInlineScriptTags200ApplicationJsonInlineScriptTagsDisplayScopeEnum {
    All = "all",
    ThanksPage = "thanks_page",
    Cart = "cart"
}

export enum GetInlineScriptTags200ApplicationJsonInlineScriptTagsTriggerEventEnum {
    ObjectBuilded = "object_builded"
}


export class GetInlineScriptTags200ApplicationJsonInlineScriptTags extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account_id" })
  accountId?: string;

  @SpeakeasyMetadata({ data: "json, name=display_scope" })
  displayScope?: GetInlineScriptTags200ApplicationJsonInlineScriptTagsDisplayScopeEnum;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=make_date" })
  makeDate?: number;

  @SpeakeasyMetadata({ data: "json, name=oauth_application_id" })
  oauthApplicationId?: number;

  @SpeakeasyMetadata({ data: "json, name=script" })
  script?: string;

  @SpeakeasyMetadata({ data: "json, name=trigger_event" })
  triggerEvent?: GetInlineScriptTags200ApplicationJsonInlineScriptTagsTriggerEventEnum;

  @SpeakeasyMetadata({ data: "json, name=update_date" })
  updateDate?: number;
}


export class GetInlineScriptTags200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=inline_script_tags", elemType: GetInlineScriptTags200ApplicationJsonInlineScriptTags })
  inlineScriptTags?: GetInlineScriptTags200ApplicationJsonInlineScriptTags[];
}


export class GetInlineScriptTagsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  security: GetInlineScriptTagsSecurity;
}


export class GetInlineScriptTagsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getInlineScriptTags200ApplicationJsonObject?: GetInlineScriptTags200ApplicationJson;
}
