import { SpeakeasyBase } from "../../../internal/utils";
import { UserForApiContract } from "./userforapicontract";
import { SongInListEditContractInput } from "./songinlisteditcontract";
import { EntryThumbContract } from "./entrythumbcontract";
export declare enum SongListForEditContractFeaturedCategoryEnum {
    Nothing = "Nothing",
    Concerts = "Concerts",
    VocaloidRanking = "VocaloidRanking",
    Pools = "Pools",
    Other = "Other"
}
export declare enum SongListForEditContractStatusEnum {
    Draft = "Draft",
    Finished = "Finished",
    Approved = "Approved",
    Locked = "Locked"
}
export declare class SongListForEditContractInput extends SpeakeasyBase {
    author?: UserForApiContract;
    canEdit?: boolean;
    deleted?: boolean;
    description?: string;
    eventDate?: Date;
    featuredCategory?: SongListForEditContractFeaturedCategoryEnum;
    id?: number;
    name?: string;
    songLinks?: SongInListEditContractInput[];
    status?: SongListForEditContractStatusEnum;
    thumb?: EntryThumbContract;
    updateNotes?: string;
    version?: number;
}
