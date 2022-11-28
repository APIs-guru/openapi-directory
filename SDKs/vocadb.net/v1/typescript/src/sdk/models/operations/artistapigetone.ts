import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ArtistApiGetOnePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}

export enum ArtistApiGetOneFieldsEnum {
    None = "None",
    AdditionalNames = "AdditionalNames",
    ArtistLinks = "ArtistLinks",
    ArtistLinksReverse = "ArtistLinksReverse",
    BaseVoicebank = "BaseVoicebank",
    Description = "Description",
    MainPicture = "MainPicture",
    Names = "Names",
    Tags = "Tags",
    WebLinks = "WebLinks"
}

export enum ArtistApiGetOneLangEnum {
    Default = "Default",
    Japanese = "Japanese",
    Romaji = "Romaji",
    English = "English"
}

export enum ArtistApiGetOneRelationsEnum {
    None = "None",
    LatestAlbums = "LatestAlbums",
    LatestEvents = "LatestEvents",
    LatestSongs = "LatestSongs",
    PopularAlbums = "PopularAlbums",
    PopularSongs = "PopularSongs",
    All = "All"
}


export class ArtistApiGetOneQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: ArtistApiGetOneFieldsEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lang" })
  lang?: ArtistApiGetOneLangEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=relations" })
  relations?: ArtistApiGetOneRelationsEnum;
}


export class ArtistApiGetOneRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ArtistApiGetOnePathParams;

  @SpeakeasyMetadata()
  queryParams: ArtistApiGetOneQueryParams;
}


export class ArtistApiGetOneResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  artistForApiContract?: shared.ArtistForApiContract;

  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
