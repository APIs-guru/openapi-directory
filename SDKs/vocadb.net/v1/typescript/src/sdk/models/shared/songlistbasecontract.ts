import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum SongListBaseContractFeaturedCategoryEnum {
    Nothing = "Nothing",
    Concerts = "Concerts",
    VocaloidRanking = "VocaloidRanking",
    Pools = "Pools",
    Other = "Other"
}


export class SongListBaseContract extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=featuredCategory" })
  featuredCategory?: SongListBaseContractFeaturedCategoryEnum;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
