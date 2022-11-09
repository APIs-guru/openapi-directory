import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ReleaseEventSeriesContract } from "./releaseeventseriescontract";
import { SongListBaseContract } from "./songlistbasecontract";
import { VenueContract } from "./venuecontract";

export enum ReleaseEventContractCategoryEnum {
    Unspecified = "Unspecified"
,    AlbumRelease = "AlbumRelease"
,    Anniversary = "Anniversary"
,    Club = "Club"
,    Concert = "Concert"
,    Contest = "Contest"
,    Convention = "Convention"
,    Other = "Other"
}

export enum ReleaseEventContractInheritedCategoryEnum {
    Unspecified = "Unspecified"
,    AlbumRelease = "AlbumRelease"
,    Anniversary = "Anniversary"
,    Club = "Club"
,    Concert = "Concert"
,    Contest = "Contest"
,    Convention = "Convention"
,    Other = "Other"
}

export enum ReleaseEventContractStatusEnum {
    Draft = "Draft"
,    Finished = "Finished"
,    Approved = "Approved"
,    Locked = "Locked"
}


export class ReleaseEventContract extends SpeakeasyBase {
  @Metadata({ data: "json, name=additionalNames" })
  additionalNames?: string;

  @Metadata({ data: "json, name=category" })
  category?: ReleaseEventContractCategoryEnum;

  @Metadata({ data: "json, name=customName" })
  customName?: boolean;

  @Metadata({ data: "json, name=date" })
  date?: Date;

  @Metadata({ data: "json, name=deleted" })
  deleted?: boolean;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=endDate" })
  endDate?: Date;

  @Metadata({ data: "json, name=hasVenueOrVenueName" })
  hasVenueOrVenueName?: boolean;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=inheritedCategory" })
  inheritedCategory?: ReleaseEventContractInheritedCategoryEnum;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=pictureMime" })
  pictureMime?: string;

  @Metadata({ data: "json, name=series" })
  series?: ReleaseEventSeriesContract;

  @Metadata({ data: "json, name=songList" })
  songList?: SongListBaseContract;

  @Metadata({ data: "json, name=status" })
  status?: ReleaseEventContractStatusEnum;

  @Metadata({ data: "json, name=urlSlug" })
  urlSlug?: string;

  @Metadata({ data: "json, name=venue" })
  venue?: VenueContract;

  @Metadata({ data: "json, name=venueName" })
  venueName?: string;

  @Metadata({ data: "json, name=version" })
  version?: number;
}
