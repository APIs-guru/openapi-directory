import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ReleaseEventSeriesContract } from "./releaseeventseriescontract";
import { SongListBaseContract } from "./songlistbasecontract";
import { VenueContract } from "./venuecontract";


export enum ReleaseEventContractCategoryEnum {
    Unspecified = "Unspecified",
    AlbumRelease = "AlbumRelease",
    Anniversary = "Anniversary",
    Club = "Club",
    Concert = "Concert",
    Contest = "Contest",
    Convention = "Convention",
    Other = "Other"
}

export enum ReleaseEventContractInheritedCategoryEnum {
    Unspecified = "Unspecified",
    AlbumRelease = "AlbumRelease",
    Anniversary = "Anniversary",
    Club = "Club",
    Concert = "Concert",
    Contest = "Contest",
    Convention = "Convention",
    Other = "Other"
}

export enum ReleaseEventContractStatusEnum {
    Draft = "Draft",
    Finished = "Finished",
    Approved = "Approved",
    Locked = "Locked"
}


export class ReleaseEventContract extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=additionalNames" })
  additionalNames?: string;

  @SpeakeasyMetadata({ data: "json, name=category" })
  category?: ReleaseEventContractCategoryEnum;

  @SpeakeasyMetadata({ data: "json, name=customName" })
  customName?: boolean;

  @SpeakeasyMetadata({ data: "json, name=date" })
  date?: Date;

  @SpeakeasyMetadata({ data: "json, name=deleted" })
  deleted?: boolean;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=endDate" })
  endDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=hasVenueOrVenueName" })
  hasVenueOrVenueName?: boolean;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=inheritedCategory" })
  inheritedCategory?: ReleaseEventContractInheritedCategoryEnum;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=pictureMime" })
  pictureMime?: string;

  @SpeakeasyMetadata({ data: "json, name=series" })
  series?: ReleaseEventSeriesContract;

  @SpeakeasyMetadata({ data: "json, name=songList" })
  songList?: SongListBaseContract;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: ReleaseEventContractStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=urlSlug" })
  urlSlug?: string;

  @SpeakeasyMetadata({ data: "json, name=venue" })
  venue?: VenueContract;

  @SpeakeasyMetadata({ data: "json, name=venueName" })
  venueName?: string;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: number;
}


export class ReleaseEventContractInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=additionalNames" })
  additionalNames?: string;

  @SpeakeasyMetadata({ data: "json, name=category" })
  category?: ReleaseEventContractCategoryEnum;

  @SpeakeasyMetadata({ data: "json, name=customName" })
  customName?: boolean;

  @SpeakeasyMetadata({ data: "json, name=date" })
  date?: Date;

  @SpeakeasyMetadata({ data: "json, name=deleted" })
  deleted?: boolean;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=endDate" })
  endDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=pictureMime" })
  pictureMime?: string;

  @SpeakeasyMetadata({ data: "json, name=series" })
  series?: ReleaseEventSeriesContract;

  @SpeakeasyMetadata({ data: "json, name=songList" })
  songList?: SongListBaseContract;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: ReleaseEventContractStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=urlSlug" })
  urlSlug?: string;

  @SpeakeasyMetadata({ data: "json, name=venue" })
  venue?: VenueContract;

  @SpeakeasyMetadata({ data: "json, name=venueName" })
  venueName?: string;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: number;
}
