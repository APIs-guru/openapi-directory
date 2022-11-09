import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum SongApiGetTopSongsFieldsEnum {
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

export enum SongApiGetTopSongsFilterByEnum {
    CreateDate = "CreateDate"
,    PublishDate = "PublishDate"
,    Popularity = "Popularity"
}

export enum SongApiGetTopSongsLanguagePreferenceEnum {
    Default = "Default"
,    Japanese = "Japanese"
,    Romaji = "Romaji"
,    English = "English"
}

export enum SongApiGetTopSongsVocalistEnum {
    Nothing = "Nothing"
,    Vocaloid = "Vocaloid"
,    Utau = "UTAU"
,    Other = "Other"
}


export class SongApiGetTopSongsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=durationHours" })
  durationHours?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: SongApiGetTopSongsFieldsEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=filterBy" })
  filterBy?: SongApiGetTopSongsFilterByEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=languagePreference" })
  languagePreference?: SongApiGetTopSongsLanguagePreferenceEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=maxResults" })
  maxResults?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=startDate" })
  startDate?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=vocalist" })
  vocalist?: SongApiGetTopSongsVocalistEnum;
}


export class SongApiGetTopSongsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: SongApiGetTopSongsQueryParams;
}


export class SongApiGetTopSongsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.SongForApiContract })
  songForApiContracts?: shared.SongForApiContract[];

  @Metadata()
  statusCode: number;
}
