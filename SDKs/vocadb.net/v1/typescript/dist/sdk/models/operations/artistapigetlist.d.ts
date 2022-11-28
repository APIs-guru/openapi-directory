import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum ArtistApiGetListFieldsEnum {
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
export declare enum ArtistApiGetListLangEnum {
    Default = "Default",
    Japanese = "Japanese",
    Romaji = "Romaji",
    English = "English"
}
export declare enum ArtistApiGetListNameMatchModeEnum {
    Auto = "Auto",
    Partial = "Partial",
    StartsWith = "StartsWith",
    Exact = "Exact",
    Words = "Words"
}
export declare enum ArtistApiGetListSortEnum {
    None = "None",
    Name = "Name",
    AdditionDate = "AdditionDate",
    AdditionDateAsc = "AdditionDateAsc",
    ReleaseDate = "ReleaseDate",
    SongCount = "SongCount",
    SongRating = "SongRating",
    FollowerCount = "FollowerCount"
}
export declare enum ArtistApiGetListStatusEnum {
    Draft = "Draft",
    Finished = "Finished",
    Approved = "Approved",
    Locked = "Locked"
}
export declare class ArtistApiGetListQueryParams extends SpeakeasyBase {
    advancedFilters?: any[];
    allowBaseVoicebanks?: boolean;
    artistTypes?: string;
    childTags?: boolean;
    fields?: ArtistApiGetListFieldsEnum;
    followedByUserId?: number;
    getTotalCount?: boolean;
    lang?: ArtistApiGetListLangEnum;
    maxResults?: number;
    nameMatchMode?: ArtistApiGetListNameMatchModeEnum;
    preferAccurateMatches?: boolean;
    query?: string;
    sort?: ArtistApiGetListSortEnum;
    start?: number;
    status?: ArtistApiGetListStatusEnum;
    tagId?: number[];
    tagName?: string[];
}
export declare class ArtistApiGetListRequest extends SpeakeasyBase {
    queryParams: ArtistApiGetListQueryParams;
}
export declare class ArtistApiGetListResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    partialFindResultArtistForApiContract?: shared.PartialFindResultArtistForApiContract;
    statusCode: number;
}
