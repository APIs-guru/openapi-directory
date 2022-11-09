import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class TagApiGetChildTagsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=tagId" })
  tagId: number;
}

export enum TagApiGetChildTagsFieldsEnum {
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

export enum TagApiGetChildTagsLangEnum {
    Default = "Default"
,    Japanese = "Japanese"
,    Romaji = "Romaji"
,    English = "English"
}


export class TagApiGetChildTagsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: TagApiGetChildTagsFieldsEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=lang" })
  lang?: TagApiGetChildTagsLangEnum;
}


export class TagApiGetChildTagsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: TagApiGetChildTagsPathParams;

  @Metadata()
  queryParams: TagApiGetChildTagsQueryParams;
}


export class TagApiGetChildTagsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: shared.TagForApiContract })
  tagForApiContracts?: shared.TagForApiContract[];
}
