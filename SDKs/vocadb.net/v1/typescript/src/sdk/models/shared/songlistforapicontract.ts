import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UserForApiContract } from "./userforapicontract";
import { ReleaseEventForApiContract } from "./releaseeventforapicontract";
import { CommentForApiContract } from "./commentforapicontract";
import { EntryThumbForApiContract } from "./entrythumbforapicontract";
import { TagUsageForApiContract } from "./tagusageforapicontract";


export enum SongListForApiContractFeaturedCategoryEnum {
    Nothing = "Nothing",
    Concerts = "Concerts",
    VocaloidRanking = "VocaloidRanking",
    Pools = "Pools",
    Other = "Other"
}

export enum SongListForApiContractStatusEnum {
    Draft = "Draft",
    Finished = "Finished",
    Approved = "Approved",
    Locked = "Locked"
}


export class SongListForApiContract extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=author" })
  author?: UserForApiContract;

  @SpeakeasyMetadata({ data: "json, name=deleted" })
  deleted?: boolean;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=eventDate" })
  eventDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=events", elemType: ReleaseEventForApiContract })
  events?: ReleaseEventForApiContract[];

  @SpeakeasyMetadata({ data: "json, name=featuredCategory" })
  featuredCategory?: SongListForApiContractFeaturedCategoryEnum;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=latestComments", elemType: CommentForApiContract })
  latestComments?: CommentForApiContract[];

  @SpeakeasyMetadata({ data: "json, name=mainPicture" })
  mainPicture?: EntryThumbForApiContract;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: SongListForApiContractStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=tags", elemType: TagUsageForApiContract })
  tags?: TagUsageForApiContract[];
}
