import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class TagApiGetByNamePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;
}

export enum TagApiGetByNameFieldsEnum {
    None = "None",
    AdditionalNames = "AdditionalNames",
    AliasedTo = "AliasedTo",
    Description = "Description",
    MainPicture = "MainPicture",
    Names = "Names",
    Parent = "Parent",
    RelatedTags = "RelatedTags",
    TranslatedDescription = "TranslatedDescription",
    WebLinks = "WebLinks"
}

export enum TagApiGetByNameLangEnum {
    Default = "Default",
    Japanese = "Japanese",
    Romaji = "Romaji",
    English = "English"
}


export class TagApiGetByNameQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: TagApiGetByNameFieldsEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lang" })
  lang?: TagApiGetByNameLangEnum;
}


export class TagApiGetByNameRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: TagApiGetByNamePathParams;

  @SpeakeasyMetadata()
  queryParams: TagApiGetByNameQueryParams;
}


export class TagApiGetByNameResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  tagForApiContract?: shared.TagForApiContract;
}
