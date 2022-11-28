import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum SongApiGetHighlightedSongsFieldsEnum {
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

export enum SongApiGetHighlightedSongsLanguagePreferenceEnum {
    Default = "Default",
    Japanese = "Japanese",
    Romaji = "Romaji",
    English = "English"
}


export class SongApiGetHighlightedSongsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: SongApiGetHighlightedSongsFieldsEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=languagePreference" })
  languagePreference?: SongApiGetHighlightedSongsLanguagePreferenceEnum;
}


export class SongApiGetHighlightedSongsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: SongApiGetHighlightedSongsQueryParams;
}


export class SongApiGetHighlightedSongsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.SongForApiContract })
  songForApiContracts?: shared.SongForApiContract[];

  @SpeakeasyMetadata()
  statusCode: number;
}
