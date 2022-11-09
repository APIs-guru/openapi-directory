import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum TagApiGetTopTagsEntryTypeEnum {
    Undefined = "Undefined"
,    Album = "Album"
,    Artist = "Artist"
,    DiscussionTopic = "DiscussionTopic"
,    Pv = "PV"
,    ReleaseEvent = "ReleaseEvent"
,    ReleaseEventSeries = "ReleaseEventSeries"
,    Song = "Song"
,    SongList = "SongList"
,    Tag = "Tag"
,    User = "User"
,    Venue = "Venue"
}

export enum TagApiGetTopTagsLangEnum {
    Default = "Default"
,    Japanese = "Japanese"
,    Romaji = "Romaji"
,    English = "English"
}


export class TagApiGetTopTagsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=categoryName" })
  categoryName?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=entryType" })
  entryType?: TagApiGetTopTagsEntryTypeEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=lang" })
  lang?: TagApiGetTopTagsLangEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=maxResults" })
  maxResults?: number;
}


export class TagApiGetTopTagsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: TagApiGetTopTagsQueryParams;
}


export class TagApiGetTopTagsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: shared.TagBaseContract })
  tagBaseContracts?: shared.TagBaseContract[];
}
