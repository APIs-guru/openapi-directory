import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UserForApiContract } from "./userforapicontract";
import { SongInListEditContractInput } from "./songinlisteditcontract";
import { EntryThumbContract } from "./entrythumbcontract";


export enum SongListForEditContractFeaturedCategoryEnum {
    Nothing = "Nothing",
    Concerts = "Concerts",
    VocaloidRanking = "VocaloidRanking",
    Pools = "Pools",
    Other = "Other"
}

export enum SongListForEditContractStatusEnum {
    Draft = "Draft",
    Finished = "Finished",
    Approved = "Approved",
    Locked = "Locked"
}


export class SongListForEditContractInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=author" })
  author?: UserForApiContract;

  @SpeakeasyMetadata({ data: "json, name=canEdit" })
  canEdit?: boolean;

  @SpeakeasyMetadata({ data: "json, name=deleted" })
  deleted?: boolean;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=eventDate" })
  eventDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=featuredCategory" })
  featuredCategory?: SongListForEditContractFeaturedCategoryEnum;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=songLinks", elemType: SongInListEditContractInput })
  songLinks?: SongInListEditContractInput[];

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: SongListForEditContractStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=thumb" })
  thumb?: EntryThumbContract;

  @SpeakeasyMetadata({ data: "json, name=updateNotes" })
  updateNotes?: string;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: number;
}
