import { SpeakeasyBase } from "../../../internal/utils";
import { UserForApiContract } from "./userforapicontract";
import { ReleaseEventForApiContract } from "./releaseeventforapicontract";
import { CommentForApiContract } from "./commentforapicontract";
import { EntryThumbForApiContract } from "./entrythumbforapicontract";
import { TagUsageForApiContract } from "./tagusageforapicontract";
export declare enum SongListForApiContractFeaturedCategoryEnum {
    Nothing = "Nothing",
    Concerts = "Concerts",
    VocaloidRanking = "VocaloidRanking",
    Pools = "Pools",
    Other = "Other"
}
export declare enum SongListForApiContractStatusEnum {
    Draft = "Draft",
    Finished = "Finished",
    Approved = "Approved",
    Locked = "Locked"
}
export declare class SongListForApiContract extends SpeakeasyBase {
    author?: UserForApiContract;
    deleted?: boolean;
    description?: string;
    eventDate?: Date;
    events?: ReleaseEventForApiContract[];
    featuredCategory?: SongListForApiContractFeaturedCategoryEnum;
    id?: number;
    latestComments?: CommentForApiContract[];
    mainPicture?: EntryThumbForApiContract;
    name?: string;
    status?: SongListForApiContractStatusEnum;
    tags?: TagUsageForApiContract[];
}
