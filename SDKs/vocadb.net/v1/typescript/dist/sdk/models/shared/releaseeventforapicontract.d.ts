import { SpeakeasyBase } from "../../../internal/utils";
import { ArtistForEventContract } from "./artistforeventcontract";
import { EntryThumbForApiContract } from "./entrythumbforapicontract";
import { LocalizedStringContract } from "./localizedstringcontract";
import { ReleaseEventSeriesContract } from "./releaseeventseriescontract";
import { SongListBaseContract } from "./songlistbasecontract";
import { TagUsageForApiContract } from "./tagusageforapicontract";
import { VenueForApiContractInput } from "./venueforapicontract";
import { WebLinkForApiContract } from "./weblinkforapicontract";
import { VenueForApiContract } from "./venueforapicontract";
export declare enum ReleaseEventForApiContractCategoryEnum {
    Unspecified = "Unspecified",
    AlbumRelease = "AlbumRelease",
    Anniversary = "Anniversary",
    Club = "Club",
    Concert = "Concert",
    Contest = "Contest",
    Convention = "Convention",
    Other = "Other"
}
export declare enum ReleaseEventForApiContractStatusEnum {
    Draft = "Draft",
    Finished = "Finished",
    Approved = "Approved",
    Locked = "Locked"
}
export declare class ReleaseEventForApiContractInput extends SpeakeasyBase {
    additionalNames?: string;
    artists?: ArtistForEventContract[];
    category?: ReleaseEventForApiContractCategoryEnum;
    date?: Date;
    description?: string;
    endDate?: Date;
    id?: number;
    mainPicture?: EntryThumbForApiContract;
    name?: string;
    names?: LocalizedStringContract[];
    series?: ReleaseEventSeriesContract;
    seriesId?: number;
    seriesNumber?: number;
    seriesSuffix?: string;
    songList?: SongListBaseContract;
    status?: ReleaseEventForApiContractStatusEnum;
    tags?: TagUsageForApiContract[];
    urlSlug?: string;
    venue?: VenueForApiContractInput;
    venueName?: string;
    version?: number;
    webLinks?: WebLinkForApiContract[];
}
export declare class ReleaseEventForApiContract extends SpeakeasyBase {
    additionalNames?: string;
    artists?: ArtistForEventContract[];
    category?: ReleaseEventForApiContractCategoryEnum;
    date?: Date;
    description?: string;
    endDate?: Date;
    id?: number;
    mainPicture?: EntryThumbForApiContract;
    name?: string;
    names?: LocalizedStringContract[];
    series?: ReleaseEventSeriesContract;
    seriesId?: number;
    seriesNumber?: number;
    seriesSuffix?: string;
    songList?: SongListBaseContract;
    status?: ReleaseEventForApiContractStatusEnum;
    tags?: TagUsageForApiContract[];
    urlSlug?: string;
    venue?: VenueForApiContract;
    venueName?: string;
    version?: number;
    webLinks?: WebLinkForApiContract[];
}
