import { SpeakeasyBase } from "../../../internal/utils";
import { ReleaseEventSeriesContract } from "./releaseeventseriescontract";
import { SongListBaseContract } from "./songlistbasecontract";
import { VenueContract } from "./venuecontract";
export declare enum ReleaseEventContractCategoryEnum {
    Unspecified = "Unspecified",
    AlbumRelease = "AlbumRelease",
    Anniversary = "Anniversary",
    Club = "Club",
    Concert = "Concert",
    Contest = "Contest",
    Convention = "Convention",
    Other = "Other"
}
export declare enum ReleaseEventContractInheritedCategoryEnum {
    Unspecified = "Unspecified",
    AlbumRelease = "AlbumRelease",
    Anniversary = "Anniversary",
    Club = "Club",
    Concert = "Concert",
    Contest = "Contest",
    Convention = "Convention",
    Other = "Other"
}
export declare enum ReleaseEventContractStatusEnum {
    Draft = "Draft",
    Finished = "Finished",
    Approved = "Approved",
    Locked = "Locked"
}
export declare class ReleaseEventContract extends SpeakeasyBase {
    additionalNames?: string;
    category?: ReleaseEventContractCategoryEnum;
    customName?: boolean;
    date?: Date;
    deleted?: boolean;
    description?: string;
    endDate?: Date;
    hasVenueOrVenueName?: boolean;
    id?: number;
    inheritedCategory?: ReleaseEventContractInheritedCategoryEnum;
    name?: string;
    pictureMime?: string;
    series?: ReleaseEventSeriesContract;
    songList?: SongListBaseContract;
    status?: ReleaseEventContractStatusEnum;
    urlSlug?: string;
    venue?: VenueContract;
    venueName?: string;
    version?: number;
}
export declare class ReleaseEventContractInput extends SpeakeasyBase {
    additionalNames?: string;
    category?: ReleaseEventContractCategoryEnum;
    customName?: boolean;
    date?: Date;
    deleted?: boolean;
    description?: string;
    endDate?: Date;
    id?: number;
    name?: string;
    pictureMime?: string;
    series?: ReleaseEventSeriesContract;
    songList?: SongListBaseContract;
    status?: ReleaseEventContractStatusEnum;
    urlSlug?: string;
    venue?: VenueContract;
    venueName?: string;
    version?: number;
}
