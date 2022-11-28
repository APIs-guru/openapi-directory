import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class SongApiGetRelatedPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}

export enum SongApiGetRelatedFieldsEnum {
    None = "None",
    AdditionalNames = "AdditionalNames",
    Albums = "Albums",
    Artists = "Artists",
    Lyrics = "Lyrics",
    MainPicture = "MainPicture",
    Names = "Names",
    PVs = "PVs",
    ReleaseEvent = "ReleaseEvent",
    Tags = "Tags",
    ThumbUrl = "ThumbUrl",
    WebLinks = "WebLinks"
}

export enum SongApiGetRelatedLangEnum {
    Default = "Default",
    Japanese = "Japanese",
    Romaji = "Romaji",
    English = "English"
}


export class SongApiGetRelatedQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: SongApiGetRelatedFieldsEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lang" })
  lang?: SongApiGetRelatedLangEnum;
}


export class SongApiGetRelatedRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: SongApiGetRelatedPathParams;

  @SpeakeasyMetadata()
  queryParams: SongApiGetRelatedQueryParams;
}


export class SongApiGetRelatedResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  relatedSongsContract?: shared.RelatedSongsContract;

  @SpeakeasyMetadata()
  statusCode: number;
}
