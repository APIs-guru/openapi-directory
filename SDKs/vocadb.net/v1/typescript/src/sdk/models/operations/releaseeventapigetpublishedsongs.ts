import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ReleaseEventApiGetPublishedSongsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=eventId" })
  eventId: number;
}

export enum ReleaseEventApiGetPublishedSongsFieldsEnum {
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

export enum ReleaseEventApiGetPublishedSongsLangEnum {
    Default = "Default"
,    Japanese = "Japanese"
,    Romaji = "Romaji"
,    English = "English"
}


export class ReleaseEventApiGetPublishedSongsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: ReleaseEventApiGetPublishedSongsFieldsEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=lang" })
  lang?: ReleaseEventApiGetPublishedSongsLangEnum;
}


export class ReleaseEventApiGetPublishedSongsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ReleaseEventApiGetPublishedSongsPathParams;

  @Metadata()
  queryParams: ReleaseEventApiGetPublishedSongsQueryParams;
}


export class ReleaseEventApiGetPublishedSongsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.SongForApiContract })
  songForApiContracts?: shared.SongForApiContract[];

  @Metadata()
  statusCode: number;
}
