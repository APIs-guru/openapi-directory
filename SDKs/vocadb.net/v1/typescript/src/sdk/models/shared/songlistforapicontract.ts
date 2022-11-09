import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { UserForApiContract } from "./userforapicontract";
import { ReleaseEventForApiContract } from "./releaseeventforapicontract";
import { CommentForApiContract } from "./commentforapicontract";
import { EntryThumbForApiContract } from "./entrythumbforapicontract";
import { TagUsageForApiContract } from "./tagusageforapicontract";

export enum SongListForApiContractFeaturedCategoryEnum {
    Nothing = "Nothing"
,    Concerts = "Concerts"
,    VocaloidRanking = "VocaloidRanking"
,    Pools = "Pools"
,    Other = "Other"
}

export enum SongListForApiContractStatusEnum {
    Draft = "Draft"
,    Finished = "Finished"
,    Approved = "Approved"
,    Locked = "Locked"
}


export class SongListForApiContract extends SpeakeasyBase {
  @Metadata({ data: "json, name=author" })
  author?: UserForApiContract;

  @Metadata({ data: "json, name=deleted" })
  deleted?: boolean;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=eventDate" })
  eventDate?: Date;

  @Metadata({ data: "json, name=events", elemType: shared.ReleaseEventForApiContract })
  events?: ReleaseEventForApiContract[];

  @Metadata({ data: "json, name=featuredCategory" })
  featuredCategory?: SongListForApiContractFeaturedCategoryEnum;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=latestComments", elemType: shared.CommentForApiContract })
  latestComments?: CommentForApiContract[];

  @Metadata({ data: "json, name=mainPicture" })
  mainPicture?: EntryThumbForApiContract;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=status" })
  status?: SongListForApiContractStatusEnum;

  @Metadata({ data: "json, name=tags", elemType: shared.TagUsageForApiContract })
  tags?: TagUsageForApiContract[];
}
