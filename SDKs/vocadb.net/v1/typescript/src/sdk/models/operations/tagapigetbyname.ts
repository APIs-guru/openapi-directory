import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class TagApiGetByNamePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;
}

export enum TagApiGetByNameFieldsEnum {
    None = "None"
,    AdditionalNames = "AdditionalNames"
,    AliasedTo = "AliasedTo"
,    Description = "Description"
,    MainPicture = "MainPicture"
,    Names = "Names"
,    Parent = "Parent"
,    RelatedTags = "RelatedTags"
,    TranslatedDescription = "TranslatedDescription"
,    WebLinks = "WebLinks"
}

export enum TagApiGetByNameLangEnum {
    Default = "Default"
,    Japanese = "Japanese"
,    Romaji = "Romaji"
,    English = "English"
}


export class TagApiGetByNameQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: TagApiGetByNameFieldsEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=lang" })
  lang?: TagApiGetByNameLangEnum;
}


export class TagApiGetByNameRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: TagApiGetByNamePathParams;

  @Metadata()
  queryParams: TagApiGetByNameQueryParams;
}


export class TagApiGetByNameResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  tagForApiContract?: shared.TagForApiContract;
}
