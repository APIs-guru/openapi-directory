import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum SongApiGetTopSongsFieldsEnum {
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

export enum SongApiGetTopSongsFilterByEnum {
    CreateDate = "CreateDate",
    PublishDate = "PublishDate",
    Popularity = "Popularity"
}

export enum SongApiGetTopSongsLanguagePreferenceEnum {
    Default = "Default",
    Japanese = "Japanese",
    Romaji = "Romaji",
    English = "English"
}

export enum SongApiGetTopSongsVocalistEnum {
    Nothing = "Nothing",
    Vocaloid = "Vocaloid",
    Utau = "UTAU",
    Other = "Other"
}


export class SongApiGetTopSongsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=durationHours" })
  durationHours?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: SongApiGetTopSongsFieldsEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filterBy" })
  filterBy?: SongApiGetTopSongsFilterByEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=languagePreference" })
  languagePreference?: SongApiGetTopSongsLanguagePreferenceEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=startDate" })
  startDate?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=vocalist" })
  vocalist?: SongApiGetTopSongsVocalistEnum;
}


export class SongApiGetTopSongsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: SongApiGetTopSongsQueryParams;
}


export class SongApiGetTopSongsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.SongForApiContract })
  songForApiContracts?: shared.SongForApiContract[];

  @SpeakeasyMetadata()
  statusCode: number;
}
