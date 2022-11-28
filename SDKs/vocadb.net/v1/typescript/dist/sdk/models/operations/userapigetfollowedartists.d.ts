import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UserApiGetFollowedArtistsPathParams extends SpeakeasyBase {
    id: number;
}
export declare enum UserApiGetFollowedArtistsArtistTypeEnum {
    Unknown = "Unknown",
    Circle = "Circle",
    Label = "Label",
    Producer = "Producer",
    Animator = "Animator",
    Illustrator = "Illustrator",
    Lyricist = "Lyricist",
    Vocaloid = "Vocaloid",
    Utau = "UTAU",
    CeVio = "CeVIO",
    OtherVoiceSynthesizer = "OtherVoiceSynthesizer",
    OtherVocalist = "OtherVocalist",
    OtherGroup = "OtherGroup",
    OtherIndividual = "OtherIndividual",
    Utaite = "Utaite",
    Band = "Band",
    Vocalist = "Vocalist",
    Character = "Character",
    SynthesizerV = "SynthesizerV"
}
export declare enum UserApiGetFollowedArtistsFieldsEnum {
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
export declare enum UserApiGetFollowedArtistsLangEnum {
    Default = "Default",
    Japanese = "Japanese",
    Romaji = "Romaji",
    English = "English"
}
export declare enum UserApiGetFollowedArtistsNameMatchModeEnum {
    Auto = "Auto",
    Partial = "Partial",
    StartsWith = "StartsWith",
    Exact = "Exact",
    Words = "Words"
}
export declare enum UserApiGetFollowedArtistsSortEnum {
    None = "None",
    Name = "Name",
    AdditionDate = "AdditionDate",
    AdditionDateAsc = "AdditionDateAsc",
    ReleaseDate = "ReleaseDate",
    SongCount = "SongCount",
    SongRating = "SongRating",
    FollowerCount = "FollowerCount"
}
export declare class UserApiGetFollowedArtistsQueryParams extends SpeakeasyBase {
    artistType?: UserApiGetFollowedArtistsArtistTypeEnum;
    fields?: UserApiGetFollowedArtistsFieldsEnum;
    getTotalCount?: boolean;
    lang?: UserApiGetFollowedArtistsLangEnum;
    maxResults?: number;
    nameMatchMode?: UserApiGetFollowedArtistsNameMatchModeEnum;
    query?: string;
    sort?: UserApiGetFollowedArtistsSortEnum;
    start?: number;
    tagId?: number[];
}
export declare class UserApiGetFollowedArtistsRequest extends SpeakeasyBase {
    pathParams: UserApiGetFollowedArtistsPathParams;
    queryParams: UserApiGetFollowedArtistsQueryParams;
}
export declare class UserApiGetFollowedArtistsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    partialFindResultArtistForUserForApiContract?: shared.PartialFindResultArtistForUserForApiContract;
    statusCode: number;
}
