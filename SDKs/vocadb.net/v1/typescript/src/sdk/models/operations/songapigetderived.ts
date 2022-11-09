import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class SongApiGetDerivedPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}

export enum SongApiGetDerivedFieldsEnum {
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

export enum SongApiGetDerivedLangEnum {
    Default = "Default"
,    Japanese = "Japanese"
,    Romaji = "Romaji"
,    English = "English"
}


export class SongApiGetDerivedQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: SongApiGetDerivedFieldsEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=lang" })
  lang?: SongApiGetDerivedLangEnum;
}


export class SongApiGetDerivedRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: SongApiGetDerivedPathParams;

  @Metadata()
  queryParams: SongApiGetDerivedQueryParams;
}


export class SongApiGetDerivedResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.SongForApiContract })
  songForApiContracts?: shared.SongForApiContract[];

  @Metadata()
  statusCode: number;
}
