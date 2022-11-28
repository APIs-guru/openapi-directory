import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum TagApiGetTopTagsEntryTypeEnum {
    Undefined = "Undefined",
    Album = "Album",
    Artist = "Artist",
    DiscussionTopic = "DiscussionTopic",
    Pv = "PV",
    ReleaseEvent = "ReleaseEvent",
    ReleaseEventSeries = "ReleaseEventSeries",
    Song = "Song",
    SongList = "SongList",
    Tag = "Tag",
    User = "User",
    Venue = "Venue"
}
export declare enum TagApiGetTopTagsLangEnum {
    Default = "Default",
    Japanese = "Japanese",
    Romaji = "Romaji",
    English = "English"
}
export declare class TagApiGetTopTagsQueryParams extends SpeakeasyBase {
    categoryName?: string;
    entryType?: TagApiGetTopTagsEntryTypeEnum;
    lang?: TagApiGetTopTagsLangEnum;
    maxResults?: number;
}
export declare class TagApiGetTopTagsRequest extends SpeakeasyBase {
    queryParams: TagApiGetTopTagsQueryParams;
}
export declare class TagApiGetTopTagsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    tagBaseContracts?: shared.TagBaseContract[];
}
