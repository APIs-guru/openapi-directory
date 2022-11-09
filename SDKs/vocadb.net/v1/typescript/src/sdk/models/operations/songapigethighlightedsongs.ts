import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum SongApiGetHighlightedSongsFieldsEnum {
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

export enum SongApiGetHighlightedSongsLanguagePreferenceEnum {
    Default = "Default"
,    Japanese = "Japanese"
,    Romaji = "Romaji"
,    English = "English"
}


export class SongApiGetHighlightedSongsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: SongApiGetHighlightedSongsFieldsEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=languagePreference" })
  languagePreference?: SongApiGetHighlightedSongsLanguagePreferenceEnum;
}


export class SongApiGetHighlightedSongsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: SongApiGetHighlightedSongsQueryParams;
}


export class SongApiGetHighlightedSongsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.SongForApiContract })
  songForApiContracts?: shared.SongForApiContract[];

  @Metadata()
  statusCode: number;
}
