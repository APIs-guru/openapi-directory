import { SpeakeasyBase } from "../../../internal/utils";
export declare enum SongContractPvServicesEnum {
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
export declare enum SongContractSongTypeEnum {
    Unspecified = "Unspecified",
    Original = "Original",
    Remaster = "Remaster",
    Remix = "Remix",
    Cover = "Cover",
    Arrangement = "Arrangement",
    Instrumental = "Instrumental",
    Mashup = "Mashup",
    MusicPv = "MusicPV",
    DramaPv = "DramaPV",
    Live = "Live",
    Illustration = "Illustration",
    Other = "Other"
}
export declare enum SongContractStatusEnum {
    Draft = "Draft",
    Finished = "Finished",
    Approved = "Approved",
    Locked = "Locked"
}
export declare class SongContract extends SpeakeasyBase {
    additionalNames?: string;
    artistString?: string;
    createDate?: Date;
    deleted?: boolean;
    favoritedTimes?: number;
    id?: number;
    lengthSeconds?: number;
    name?: string;
    nicoId?: string;
    publishDate?: Date;
    pvServices?: SongContractPvServicesEnum;
    ratingScore?: number;
    songType?: SongContractSongTypeEnum;
    status?: SongContractStatusEnum;
    thumbUrl?: string;
    version?: number;
}
