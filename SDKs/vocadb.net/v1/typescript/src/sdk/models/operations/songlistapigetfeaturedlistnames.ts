import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum SongListApiGetFeaturedListNamesFeaturedCategoryEnum {
    Nothing = "Nothing",
    Concerts = "Concerts",
    VocaloidRanking = "VocaloidRanking",
    Pools = "Pools",
    Other = "Other"
}

export enum SongListApiGetFeaturedListNamesNameMatchModeEnum {
    Auto = "Auto",
    Partial = "Partial",
    StartsWith = "StartsWith",
    Exact = "Exact",
    Words = "Words"
}


export class SongListApiGetFeaturedListNamesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=featuredCategory" })
  featuredCategory?: SongListApiGetFeaturedListNamesFeaturedCategoryEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=nameMatchMode" })
  nameMatchMode?: SongListApiGetFeaturedListNamesNameMatchModeEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=query" })
  query?: string;
}


export class SongListApiGetFeaturedListNamesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: SongListApiGetFeaturedListNamesQueryParams;
}


export class SongListApiGetFeaturedListNamesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  songListApiGetFeaturedListNames200ApplicationJsonStrings?: string[];

  @SpeakeasyMetadata()
  songListApiGetFeaturedListNames200ApplicationJsonpStrings?: string[];

  @SpeakeasyMetadata()
  songListApiGetFeaturedListNames200TextJsonStrings?: string[];

  @SpeakeasyMetadata()
  statusCode: number;
}
