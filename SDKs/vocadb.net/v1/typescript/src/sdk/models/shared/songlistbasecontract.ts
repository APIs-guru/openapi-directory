import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum SongListBaseContractFeaturedCategoryEnum {
    Nothing = "Nothing"
,    Concerts = "Concerts"
,    VocaloidRanking = "VocaloidRanking"
,    Pools = "Pools"
,    Other = "Other"
}


export class SongListBaseContract extends SpeakeasyBase {
  @Metadata({ data: "json, name=featuredCategory" })
  featuredCategory?: SongListBaseContractFeaturedCategoryEnum;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=name" })
  name?: string;
}
