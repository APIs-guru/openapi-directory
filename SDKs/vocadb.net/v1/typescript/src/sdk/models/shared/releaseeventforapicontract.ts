import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ArtistForEventContract } from "./artistforeventcontract";
import { EntryThumbForApiContract } from "./entrythumbforapicontract";
import { LocalizedStringContract } from "./localizedstringcontract";
import { ReleaseEventSeriesContract } from "./releaseeventseriescontract";
import { SongListBaseContract } from "./songlistbasecontract";
import { TagUsageForApiContract } from "./tagusageforapicontract";
import { VenueForApiContract } from "./venueforapicontract";
import { WebLinkForApiContract } from "./weblinkforapicontract";

export enum ReleaseEventForApiContractCategoryEnum {
    Unspecified = "Unspecified"
,    AlbumRelease = "AlbumRelease"
,    Anniversary = "Anniversary"
,    Club = "Club"
,    Concert = "Concert"
,    Contest = "Contest"
,    Convention = "Convention"
,    Other = "Other"
}

export enum ReleaseEventForApiContractStatusEnum {
    Draft = "Draft"
,    Finished = "Finished"
,    Approved = "Approved"
,    Locked = "Locked"
}


export class ReleaseEventForApiContract extends SpeakeasyBase {
  @Metadata({ data: "json, name=additionalNames" })
  additionalNames?: string;

  @Metadata({ data: "json, name=artists", elemType: shared.ArtistForEventContract })
  artists?: ArtistForEventContract[];

  @Metadata({ data: "json, name=category" })
  category?: ReleaseEventForApiContractCategoryEnum;

  @Metadata({ data: "json, name=date" })
  date?: Date;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=endDate" })
  endDate?: Date;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=mainPicture" })
  mainPicture?: EntryThumbForApiContract;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=names", elemType: shared.LocalizedStringContract })
  names?: LocalizedStringContract[];

  @Metadata({ data: "json, name=series" })
  series?: ReleaseEventSeriesContract;

  @Metadata({ data: "json, name=seriesId" })
  seriesId?: number;

  @Metadata({ data: "json, name=seriesNumber" })
  seriesNumber?: number;

  @Metadata({ data: "json, name=seriesSuffix" })
  seriesSuffix?: string;

  @Metadata({ data: "json, name=songList" })
  songList?: SongListBaseContract;

  @Metadata({ data: "json, name=status" })
  status?: ReleaseEventForApiContractStatusEnum;

  @Metadata({ data: "json, name=tags", elemType: shared.TagUsageForApiContract })
  tags?: TagUsageForApiContract[];

  @Metadata({ data: "json, name=urlSlug" })
  urlSlug?: string;

  @Metadata({ data: "json, name=venue" })
  venue?: VenueForApiContract;

  @Metadata({ data: "json, name=venueName" })
  venueName?: string;

  @Metadata({ data: "json, name=version" })
  version?: number;

  @Metadata({ data: "json, name=webLinks", elemType: shared.WebLinkForApiContract })
  webLinks?: WebLinkForApiContract[];
}
