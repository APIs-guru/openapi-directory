import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetScriptTagsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}

export enum GetScriptTags200ApplicationJsonScriptTagsDisplayScopeEnum {
    All = "all",
    Shop = "shop",
    ThanksPage = "thanks_page",
    Cart = "cart"
}


export class GetScriptTags200ApplicationJsonScriptTags extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=display_scope" })
  displayScope?: GetScriptTags200ApplicationJsonScriptTagsDisplayScopeEnum;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=make_date" })
  makeDate?: number;

  @SpeakeasyMetadata({ data: "json, name=src" })
  src?: string;

  @SpeakeasyMetadata({ data: "json, name=update_date" })
  updateDate?: number;
}


export class GetScriptTags200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=script_tags", elemType: GetScriptTags200ApplicationJsonScriptTags })
  scriptTags?: GetScriptTags200ApplicationJsonScriptTags[];
}


export class GetScriptTagsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  security: GetScriptTagsSecurity;
}


export class GetScriptTagsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getScriptTags200ApplicationJsonObject?: GetScriptTags200ApplicationJson;
}
