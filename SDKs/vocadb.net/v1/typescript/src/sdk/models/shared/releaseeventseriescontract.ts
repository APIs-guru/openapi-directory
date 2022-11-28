import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { WebLinkContract } from "./weblinkcontract";


export enum ReleaseEventSeriesContractCategoryEnum {
    Unspecified = "Unspecified",
    AlbumRelease = "AlbumRelease",
    Anniversary = "Anniversary",
    Club = "Club",
    Concert = "Concert",
    Contest = "Contest",
    Convention = "Convention",
    Other = "Other"
}

export enum ReleaseEventSeriesContractStatusEnum {
    Draft = "Draft",
    Finished = "Finished",
    Approved = "Approved",
    Locked = "Locked"
}


export class ReleaseEventSeriesContract extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=additionalNames" })
  additionalNames?: string;

  @SpeakeasyMetadata({ data: "json, name=category" })
  category?: ReleaseEventSeriesContractCategoryEnum;

  @SpeakeasyMetadata({ data: "json, name=deleted" })
  deleted?: boolean;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=pictureMime" })
  pictureMime?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: ReleaseEventSeriesContractStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=urlSlug" })
  urlSlug?: string;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: number;

  @SpeakeasyMetadata({ data: "json, name=webLinks", elemType: WebLinkContract })
  webLinks?: WebLinkContract[];
}
