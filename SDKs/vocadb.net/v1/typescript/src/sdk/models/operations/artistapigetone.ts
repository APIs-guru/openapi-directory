import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ArtistApiGetOnePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}

export enum ArtistApiGetOneFieldsEnum {
    None = "None"
,    AdditionalNames = "AdditionalNames"
,    ArtistLinks = "ArtistLinks"
,    ArtistLinksReverse = "ArtistLinksReverse"
,    BaseVoicebank = "BaseVoicebank"
,    Description = "Description"
,    MainPicture = "MainPicture"
,    Names = "Names"
,    Tags = "Tags"
,    WebLinks = "WebLinks"
}

export enum ArtistApiGetOneLangEnum {
    Default = "Default"
,    Japanese = "Japanese"
,    Romaji = "Romaji"
,    English = "English"
}

export enum ArtistApiGetOneRelationsEnum {
    None = "None"
,    LatestAlbums = "LatestAlbums"
,    LatestEvents = "LatestEvents"
,    LatestSongs = "LatestSongs"
,    PopularAlbums = "PopularAlbums"
,    PopularSongs = "PopularSongs"
,    All = "All"
}


export class ArtistApiGetOneQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: ArtistApiGetOneFieldsEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=lang" })
  lang?: ArtistApiGetOneLangEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=relations" })
  relations?: ArtistApiGetOneRelationsEnum;
}


export class ArtistApiGetOneRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ArtistApiGetOnePathParams;

  @Metadata()
  queryParams: ArtistApiGetOneQueryParams;
}


export class ArtistApiGetOneResponse extends SpeakeasyBase {
  @Metadata()
  artistForApiContract?: shared.ArtistForApiContract;

  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
