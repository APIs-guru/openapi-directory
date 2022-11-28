import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class TagApiGetByIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}

export enum TagApiGetByIdFieldsEnum {
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

export enum TagApiGetByIdLangEnum {
    Default = "Default",
    Japanese = "Japanese",
    Romaji = "Romaji",
    English = "English"
}


export class TagApiGetByIdQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: TagApiGetByIdFieldsEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lang" })
  lang?: TagApiGetByIdLangEnum;
}


export class TagApiGetByIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: TagApiGetByIdPathParams;

  @SpeakeasyMetadata()
  queryParams: TagApiGetByIdQueryParams;
}


export class TagApiGetByIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  tagForApiContract?: shared.TagForApiContract;
}
