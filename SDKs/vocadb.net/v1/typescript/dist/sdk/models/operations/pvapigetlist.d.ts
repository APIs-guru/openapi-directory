import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum PvApiGetListLangEnum {
    Default = "Default",
    Japanese = "Japanese",
    Romaji = "Romaji",
    English = "English"
}
export declare enum PvApiGetListServiceEnum {
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
export declare class PvApiGetListQueryParams extends SpeakeasyBase {
    author?: string;
    getTotalCount?: boolean;
    lang?: PvApiGetListLangEnum;
    maxResults?: number;
    name?: string;
    service?: PvApiGetListServiceEnum;
}
export declare class PvApiGetListRequest extends SpeakeasyBase {
    queryParams: PvApiGetListQueryParams;
}
export declare class PvApiGetListResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    partialFindResultPvForSongContract?: shared.PartialFindResultPvForSongContract;
    statusCode: number;
}
