import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum SongListApiGetFeaturedListNamesFeaturedCategoryEnum {
    Nothing = "Nothing"
,    Concerts = "Concerts"
,    VocaloidRanking = "VocaloidRanking"
,    Pools = "Pools"
,    Other = "Other"
}

export enum SongListApiGetFeaturedListNamesNameMatchModeEnum {
    Auto = "Auto"
,    Partial = "Partial"
,    StartsWith = "StartsWith"
,    Exact = "Exact"
,    Words = "Words"
}


export class SongListApiGetFeaturedListNamesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=featuredCategory" })
  featuredCategory?: SongListApiGetFeaturedListNamesFeaturedCategoryEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=maxResults" })
  maxResults?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=nameMatchMode" })
  nameMatchMode?: SongListApiGetFeaturedListNamesNameMatchModeEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=query" })
  query?: string;
}


export class SongListApiGetFeaturedListNamesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: SongListApiGetFeaturedListNamesQueryParams;
}


export class SongListApiGetFeaturedListNamesResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  songListApiGetFeaturedListNames200ApplicationJsonStrings?: string[];

  @Metadata()
  songListApiGetFeaturedListNames200ApplicationJsonpStrings?: string[];

  @Metadata()
  songListApiGetFeaturedListNames200TextJsonStrings?: string[];

  @Metadata()
  statusCode: number;
}
