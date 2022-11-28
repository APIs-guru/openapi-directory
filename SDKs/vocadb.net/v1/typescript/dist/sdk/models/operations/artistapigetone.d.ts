import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ArtistApiGetOnePathParams extends SpeakeasyBase {
    id: number;
}
export declare enum ArtistApiGetOneFieldsEnum {
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
export declare enum ArtistApiGetOneLangEnum {
    Default = "Default",
    Japanese = "Japanese",
    Romaji = "Romaji",
    English = "English"
}
export declare enum ArtistApiGetOneRelationsEnum {
    None = "None",
    LatestAlbums = "LatestAlbums",
    LatestEvents = "LatestEvents",
    LatestSongs = "LatestSongs",
    PopularAlbums = "PopularAlbums",
    PopularSongs = "PopularSongs",
    All = "All"
}
export declare class ArtistApiGetOneQueryParams extends SpeakeasyBase {
    fields?: ArtistApiGetOneFieldsEnum;
    lang?: ArtistApiGetOneLangEnum;
    relations?: ArtistApiGetOneRelationsEnum;
}
export declare class ArtistApiGetOneRequest extends SpeakeasyBase {
    pathParams: ArtistApiGetOnePathParams;
    queryParams: ArtistApiGetOneQueryParams;
}
export declare class ArtistApiGetOneResponse extends SpeakeasyBase {
    artistForApiContract?: shared.ArtistForApiContract;
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
