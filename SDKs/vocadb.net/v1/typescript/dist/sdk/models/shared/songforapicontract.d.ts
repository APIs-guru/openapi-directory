import { SpeakeasyBase } from "../../../internal/utils";
import { AlbumContractInput } from "./albumcontract";
import { ArtistForSongContract } from "./artistforsongcontract";
import { LyricsForSongContract } from "./lyricsforsongcontract";
import { EntryThumbForApiContract } from "./entrythumbforapicontract";
import { LocalizedStringContract } from "./localizedstringcontract";
import { PvContract } from "./pvcontract";
import { ReleaseEventForApiContractInput } from "./releaseeventforapicontract";
import { TagUsageForApiContract } from "./tagusageforapicontract";
import { WebLinkForApiContract } from "./weblinkforapicontract";
import { AlbumContract } from "./albumcontract";
import { ReleaseEventForApiContract } from "./releaseeventforapicontract";
export declare enum SongForApiContractDefaultNameLanguageEnum {
    Unspecified = "Unspecified",
    Japanese = "Japanese",
    Romaji = "Romaji",
    English = "English"
}
export declare enum SongForApiContractPvServicesEnum {
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
export declare enum SongForApiContractSongTypeEnum {
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
export declare enum SongForApiContractStatusEnum {
    Draft = "Draft",
    Finished = "Finished",
    Approved = "Approved",
    Locked = "Locked"
}
export declare class SongForApiContractInput extends SpeakeasyBase {
    additionalNames?: string;
    albums?: AlbumContractInput[];
    artistString?: string;
    artists?: ArtistForSongContract[];
    createDate?: Date;
    defaultName?: string;
    defaultNameLanguage?: SongForApiContractDefaultNameLanguageEnum;
    deleted?: boolean;
    favoritedTimes?: number;
    id?: number;
    lengthSeconds?: number;
    lyrics?: LyricsForSongContract[];
    mainPicture?: EntryThumbForApiContract;
    mergedTo?: number;
    name?: string;
    names?: LocalizedStringContract[];
    originalVersionId?: number;
    publishDate?: Date;
    pvServices?: SongForApiContractPvServicesEnum;
    pvs?: PvContract[];
    ratingScore?: number;
    releaseEvent?: ReleaseEventForApiContractInput;
    songType?: SongForApiContractSongTypeEnum;
    status?: SongForApiContractStatusEnum;
    tags?: TagUsageForApiContract[];
    thumbUrl?: string;
    version?: number;
    webLinks?: WebLinkForApiContract[];
}
export declare class SongForApiContract extends SpeakeasyBase {
    additionalNames?: string;
    albums?: AlbumContract[];
    artistString?: string;
    artists?: ArtistForSongContract[];
    createDate?: Date;
    defaultName?: string;
    defaultNameLanguage?: SongForApiContractDefaultNameLanguageEnum;
    deleted?: boolean;
    favoritedTimes?: number;
    id?: number;
    lengthSeconds?: number;
    lyrics?: LyricsForSongContract[];
    mainPicture?: EntryThumbForApiContract;
    mergedTo?: number;
    name?: string;
    names?: LocalizedStringContract[];
    originalVersionId?: number;
    publishDate?: Date;
    pvServices?: SongForApiContractPvServicesEnum;
    pvs?: PvContract[];
    ratingScore?: number;
    releaseEvent?: ReleaseEventForApiContract;
    songType?: SongForApiContractSongTypeEnum;
    status?: SongForApiContractStatusEnum;
    tags?: TagUsageForApiContract[];
    thumbUrl?: string;
    version?: number;
    webLinks?: WebLinkForApiContract[];
}
