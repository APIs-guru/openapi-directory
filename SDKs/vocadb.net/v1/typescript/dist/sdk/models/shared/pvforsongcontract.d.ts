import { SpeakeasyBase } from "../../../internal/utils";
import { PvExtendedMetadata } from "./pvextendedmetadata";
import { SongContract } from "./songcontract";
export declare enum PvForSongContractPvTypeEnum {
    Original = "Original",
    Reprint = "Reprint",
    Other = "Other"
}
export declare enum PvForSongContractServiceEnum {
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
export declare class PvForSongContract extends SpeakeasyBase {
    author?: string;
    createdBy?: number;
    disabled?: boolean;
    extendedMetadata?: PvExtendedMetadata;
    id?: number;
    length?: number;
    name?: string;
    publishDate?: Date;
    pvId?: string;
    pvType?: PvForSongContractPvTypeEnum;
    service?: PvForSongContractServiceEnum;
    song?: SongContract;
    thumbUrl?: string;
    url?: string;
}
