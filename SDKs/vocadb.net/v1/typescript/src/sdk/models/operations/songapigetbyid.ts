import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class SongApiGetByIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}

export enum SongApiGetByIdFieldsEnum {
    None = "None"
,    AdditionalNames = "AdditionalNames"
,    Albums = "Albums"
,    Artists = "Artists"
,    Lyrics = "Lyrics"
,    MainPicture = "MainPicture"
,    Names = "Names"
,    PVs = "PVs"
,    ReleaseEvent = "ReleaseEvent"
,    Tags = "Tags"
,    ThumbUrl = "ThumbUrl"
,    WebLinks = "WebLinks"
}

export enum SongApiGetByIdLangEnum {
    Default = "Default"
,    Japanese = "Japanese"
,    Romaji = "Romaji"
,    English = "English"
}


export class SongApiGetByIdQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: SongApiGetByIdFieldsEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=lang" })
  lang?: SongApiGetByIdLangEnum;
}


export class SongApiGetByIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: SongApiGetByIdPathParams;

  @Metadata()
  queryParams: SongApiGetByIdQueryParams;
}


export class SongApiGetByIdResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  songForApiContract?: shared.SongForApiContract;

  @Metadata()
  statusCode: number;
}
