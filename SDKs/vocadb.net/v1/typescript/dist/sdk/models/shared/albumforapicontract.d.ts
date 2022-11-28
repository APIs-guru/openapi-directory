import { SpeakeasyBase } from "../../../internal/utils";
import { ArtistForAlbumForApiContract } from "./artistforalbumforapicontract";
import { AlbumDiscPropertiesContract } from "./albumdiscpropertiescontract";
import { AlbumIdentifierContract } from "./albumidentifiercontract";
import { EntryThumbForApiContract } from "./entrythumbforapicontract";
import { LocalizedStringContract } from "./localizedstringcontract";
import { PvContract } from "./pvcontract";
import { OptionalDateTimeContract } from "./optionaldatetimecontract";
import { ReleaseEventForApiContract } from "./releaseeventforapicontract";
import { TagUsageForApiContract } from "./tagusageforapicontract";
import { SongInAlbumForApiContract } from "./songinalbumforapicontract";
import { WebLinkForApiContract } from "./weblinkforapicontract";
export declare enum AlbumForApiContractDefaultNameLanguageEnum {
    Unspecified = "Unspecified",
    Japanese = "Japanese",
    Romaji = "Romaji",
    English = "English"
}
export declare enum AlbumForApiContractDiscTypeEnum {
    Unknown = "Unknown",
    Album = "Album",
    Single = "Single",
    Ep = "EP",
    SplitAlbum = "SplitAlbum",
    Compilation = "Compilation",
    Video = "Video",
    Artbook = "Artbook",
    Game = "Game",
    Fanmade = "Fanmade",
    Instrumental = "Instrumental",
    Other = "Other"
}
export declare enum AlbumForApiContractStatusEnum {
    Draft = "Draft",
    Finished = "Finished",
    Approved = "Approved",
    Locked = "Locked"
}
export declare class AlbumForApiContract extends SpeakeasyBase {
    additionalNames?: string;
    artistString?: string;
    artists?: ArtistForAlbumForApiContract[];
    barcode?: string;
    catalogNumber?: string;
    createDate?: Date;
    defaultName?: string;
    defaultNameLanguage?: AlbumForApiContractDefaultNameLanguageEnum;
    deleted?: boolean;
    description?: string;
    discType?: AlbumForApiContractDiscTypeEnum;
    discs?: AlbumDiscPropertiesContract[];
    id?: number;
    identifiers?: AlbumIdentifierContract[];
    mainPicture?: EntryThumbForApiContract;
    mergedTo?: number;
    name?: string;
    names?: LocalizedStringContract[];
    pvs?: PvContract[];
    ratingAverage?: number;
    ratingCount?: number;
    releaseDate?: OptionalDateTimeContract;
    releaseEvent?: ReleaseEventForApiContract;
    status?: AlbumForApiContractStatusEnum;
    tags?: TagUsageForApiContract[];
    tracks?: SongInAlbumForApiContract[];
    version?: number;
    webLinks?: WebLinkForApiContract[];
}
