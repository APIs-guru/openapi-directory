import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SongListApiGetSongsPathParams extends SpeakeasyBase {
    listId: number;
}
export declare enum SongListApiGetSongsFieldsEnum {
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
export declare enum SongListApiGetSongsLangEnum {
    Default = "Default",
    Japanese = "Japanese",
    Romaji = "Romaji",
    English = "English"
}
export declare enum SongListApiGetSongsNameMatchModeEnum {
    Auto = "Auto",
    Partial = "Partial",
    StartsWith = "StartsWith",
    Exact = "Exact",
    Words = "Words"
}
export declare enum SongListApiGetSongsPvServicesEnum {
    Nothing = "Nothing",
    NicoNicoDouga = "NicoNicoDouga",
    Youtube = "Youtube",
    SoundCloud = "SoundCloud",
    Vimeo = "Vimeo",
    Piapro = "Piapro",
    Bilibili = "Bilibili",
    File = "File",
    LocalFile = "LocalFile",
    Creofuga = "Creofuga",
    Bandcamp = "Bandcamp"
}
export declare enum SongListApiGetSongsSortEnum {
    None = "None",
    Name = "Name",
    AdditionDate = "AdditionDate",
    PublishDate = "PublishDate",
    FavoritedTimes = "FavoritedTimes",
    RatingScore = "RatingScore",
    TagUsageCount = "TagUsageCount"
}
export declare class SongListApiGetSongsQueryParams extends SpeakeasyBase {
    advancedFilters?: any[];
    artistId?: number[];
    childVoicebanks?: boolean;
    fields?: SongListApiGetSongsFieldsEnum;
    getTotalCount?: boolean;
    lang?: SongListApiGetSongsLangEnum;
    maxResults?: number;
    nameMatchMode?: SongListApiGetSongsNameMatchModeEnum;
    pvServices?: SongListApiGetSongsPvServicesEnum;
    query?: string;
    songTypes?: string;
    sort?: SongListApiGetSongsSortEnum;
    start?: number;
    tagId?: number[];
}
export declare class SongListApiGetSongsRequest extends SpeakeasyBase {
    pathParams: SongListApiGetSongsPathParams;
    queryParams: SongListApiGetSongsQueryParams;
}
export declare class SongListApiGetSongsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    partialFindResultSongInListForApiContract?: shared.PartialFindResultSongInListForApiContract;
    statusCode: number;
}
