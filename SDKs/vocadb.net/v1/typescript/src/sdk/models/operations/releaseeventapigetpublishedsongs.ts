import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ReleaseEventApiGetPublishedSongsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=eventId" })
  eventId: number;
}

export enum ReleaseEventApiGetPublishedSongsFieldsEnum {
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

export enum ReleaseEventApiGetPublishedSongsLangEnum {
    Default = "Default",
    Japanese = "Japanese",
    Romaji = "Romaji",
    English = "English"
}


export class ReleaseEventApiGetPublishedSongsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: ReleaseEventApiGetPublishedSongsFieldsEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lang" })
  lang?: ReleaseEventApiGetPublishedSongsLangEnum;
}


export class ReleaseEventApiGetPublishedSongsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ReleaseEventApiGetPublishedSongsPathParams;

  @SpeakeasyMetadata()
  queryParams: ReleaseEventApiGetPublishedSongsQueryParams;
}


export class ReleaseEventApiGetPublishedSongsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.SongForApiContract })
  songForApiContracts?: shared.SongForApiContract[];

  @SpeakeasyMetadata()
  statusCode: number;
}
