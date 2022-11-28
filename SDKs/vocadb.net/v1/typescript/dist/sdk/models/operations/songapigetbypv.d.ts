import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum SongApiGetByPvFieldsEnum {
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
export declare enum SongApiGetByPvLangEnum {
    Default = "Default",
    Japanese = "Japanese",
    Romaji = "Romaji",
    English = "English"
}
export declare enum SongApiGetByPvPvServiceEnum {
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
export declare class SongApiGetByPvQueryParams extends SpeakeasyBase {
    fields?: SongApiGetByPvFieldsEnum;
    lang?: SongApiGetByPvLangEnum;
    pvId: string;
    pvService: SongApiGetByPvPvServiceEnum;
}
export declare class SongApiGetByPvRequest extends SpeakeasyBase {
    queryParams: SongApiGetByPvQueryParams;
}
export declare class SongApiGetByPvResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    songForApiContract?: shared.SongForApiContract;
    statusCode: number;
}
