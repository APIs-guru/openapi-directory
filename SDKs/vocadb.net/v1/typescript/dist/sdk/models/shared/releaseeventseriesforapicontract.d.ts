import { SpeakeasyBase } from "../../../internal/utils";
import { ReleaseEventForApiContract } from "./releaseeventforapicontract";
import { EntryThumbForApiContract } from "./entrythumbforapicontract";
import { LocalizedStringContract } from "./localizedstringcontract";
import { WebLinkForApiContract } from "./weblinkforapicontract";
export declare enum ReleaseEventSeriesForApiContractCategoryEnum {
    Unspecified = "Unspecified",
    AlbumRelease = "AlbumRelease",
    Anniversary = "Anniversary",
    Club = "Club",
    Concert = "Concert",
    Contest = "Contest",
    Convention = "Convention",
    Other = "Other"
}
export declare enum ReleaseEventSeriesForApiContractStatusEnum {
    Draft = "Draft",
    Finished = "Finished",
    Approved = "Approved",
    Locked = "Locked"
}
export declare class ReleaseEventSeriesForApiContract extends SpeakeasyBase {
    additionalNames?: string;
    category?: ReleaseEventSeriesForApiContractCategoryEnum;
    description?: string;
    events?: ReleaseEventForApiContract[];
    id?: number;
    mainPicture?: EntryThumbForApiContract;
    name?: string;
    names?: LocalizedStringContract[];
    status?: ReleaseEventSeriesForApiContractStatusEnum;
    urlSlug?: string;
    version?: number;
    webLinks?: WebLinkForApiContract[];
}
