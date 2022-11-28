import { SpeakeasyBase } from "../../../internal/utils";
import { PvExtendedMetadata } from "./pvextendedmetadata";
export declare enum PvContractPvTypeEnum {
    Original = "Original",
    Reprint = "Reprint",
    Other = "Other"
}
export declare enum PvContractServiceEnum {
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
export declare class PvContract extends SpeakeasyBase {
    author?: string;
    createdBy?: number;
    disabled?: boolean;
    extendedMetadata?: PvExtendedMetadata;
    id?: number;
    length?: number;
    name?: string;
    publishDate?: Date;
    pvId?: string;
    pvType?: PvContractPvTypeEnum;
    service?: PvContractServiceEnum;
    thumbUrl?: string;
    url?: string;
}
