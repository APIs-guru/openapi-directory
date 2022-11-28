import { SpeakeasyBase } from "../../../internal/utils";
import { WebLinkContract } from "./weblinkcontract";
export declare enum ReleaseEventSeriesContractCategoryEnum {
    Unspecified = "Unspecified",
    AlbumRelease = "AlbumRelease",
    Anniversary = "Anniversary",
    Club = "Club",
    Concert = "Concert",
    Contest = "Contest",
    Convention = "Convention",
    Other = "Other"
}
export declare enum ReleaseEventSeriesContractStatusEnum {
    Draft = "Draft",
    Finished = "Finished",
    Approved = "Approved",
    Locked = "Locked"
}
export declare class ReleaseEventSeriesContract extends SpeakeasyBase {
    additionalNames?: string;
    category?: ReleaseEventSeriesContractCategoryEnum;
    deleted?: boolean;
    description?: string;
    id?: number;
    name?: string;
    pictureMime?: string;
    status?: ReleaseEventSeriesContractStatusEnum;
    urlSlug?: string;
    version?: number;
    webLinks?: WebLinkContract[];
}
