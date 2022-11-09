import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class TagApiGetByIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}

export enum TagApiGetByIdFieldsEnum {
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

export enum TagApiGetByIdLangEnum {
    Default = "Default"
,    Japanese = "Japanese"
,    Romaji = "Romaji"
,    English = "English"
}


export class TagApiGetByIdQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: TagApiGetByIdFieldsEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=lang" })
  lang?: TagApiGetByIdLangEnum;
}


export class TagApiGetByIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: TagApiGetByIdPathParams;

  @Metadata()
  queryParams: TagApiGetByIdQueryParams;
}


export class TagApiGetByIdResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  tagForApiContract?: shared.TagForApiContract;
}
