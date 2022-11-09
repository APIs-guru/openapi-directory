import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetInlineScriptTagsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class GetInlineScriptTagsRequest extends SpeakeasyBase {
  @Metadata()
  security: GetInlineScriptTagsSecurity;
}

export enum GetInlineScriptTags200ApplicationJsonInlineScriptTagsDisplayScopeEnum {
    All = "all"
,    ThanksPage = "thanks_page"
,    Cart = "cart"
}

export enum GetInlineScriptTags200ApplicationJsonInlineScriptTagsTriggerEventEnum {
    ObjectBuilded = "object_builded"
}


export class GetInlineScriptTags200ApplicationJsonInlineScriptTags extends SpeakeasyBase {
  @Metadata({ data: "json, name=account_id" })
  accountId?: string;

  @Metadata({ data: "json, name=display_scope" })
  displayScope?: GetInlineScriptTags200ApplicationJsonInlineScriptTagsDisplayScopeEnum;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=make_date" })
  makeDate?: number;

  @Metadata({ data: "json, name=oauth_application_id" })
  oauthApplicationId?: number;

  @Metadata({ data: "json, name=script" })
  script?: string;

  @Metadata({ data: "json, name=trigger_event" })
  triggerEvent?: GetInlineScriptTags200ApplicationJsonInlineScriptTagsTriggerEventEnum;

  @Metadata({ data: "json, name=update_date" })
  updateDate?: number;
}


export class GetInlineScriptTags200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=inline_script_tags", elemType: operations.GetInlineScriptTags200ApplicationJsonInlineScriptTags })
  inlineScriptTags?: GetInlineScriptTags200ApplicationJsonInlineScriptTags[];
}


export class GetInlineScriptTagsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getInlineScriptTags200ApplicationJsonObject?: GetInlineScriptTags200ApplicationJson;
}
