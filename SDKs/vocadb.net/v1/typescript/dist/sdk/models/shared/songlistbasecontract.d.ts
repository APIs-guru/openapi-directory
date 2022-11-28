import { SpeakeasyBase } from "../../../internal/utils";
export declare enum SongListBaseContractFeaturedCategoryEnum {
    Nothing = "Nothing",
    Concerts = "Concerts",
    VocaloidRanking = "VocaloidRanking",
    Pools = "Pools",
    Other = "Other"
}
export declare class SongListBaseContract extends SpeakeasyBase {
    featuredCategory?: SongListBaseContractFeaturedCategoryEnum;
    id?: number;
    name?: string;
}
