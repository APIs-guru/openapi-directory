import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ArtistForEventContract } from "./artistforeventcontract";
import { EntryThumbForApiContract } from "./entrythumbforapicontract";
import { LocalizedStringContract } from "./localizedstringcontract";
import { ReleaseEventSeriesContract } from "./releaseeventseriescontract";
import { SongListBaseContract } from "./songlistbasecontract";
import { TagUsageForApiContract } from "./tagusageforapicontract";
import { VenueForApiContractInput } from "./venueforapicontract";
import { WebLinkForApiContract } from "./weblinkforapicontract";
import { VenueForApiContract } from "./venueforapicontract";


export enum ReleaseEventForApiContractCategoryEnum {
    Unspecified = "Unspecified",
    AlbumRelease = "AlbumRelease",
    Anniversary = "Anniversary",
    Club = "Club",
    Concert = "Concert",
    Contest = "Contest",
    Convention = "Convention",
    Other = "Other"
}

export enum ReleaseEventForApiContractStatusEnum {
    Draft = "Draft",
    Finished = "Finished",
    Approved = "Approved",
    Locked = "Locked"
}


export class ReleaseEventForApiContractInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=additionalNames" })
  additionalNames?: string;

  @SpeakeasyMetadata({ data: "json, name=artists", elemType: ArtistForEventContract })
  artists?: ArtistForEventContract[];

  @SpeakeasyMetadata({ data: "json, name=category" })
  category?: ReleaseEventForApiContractCategoryEnum;

  @SpeakeasyMetadata({ data: "json, name=date" })
  date?: Date;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=endDate" })
  endDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=mainPicture" })
  mainPicture?: EntryThumbForApiContract;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=names", elemType: LocalizedStringContract })
  names?: LocalizedStringContract[];

  @SpeakeasyMetadata({ data: "json, name=series" })
  series?: ReleaseEventSeriesContract;

  @SpeakeasyMetadata({ data: "json, name=seriesId" })
  seriesId?: number;

  @SpeakeasyMetadata({ data: "json, name=seriesNumber" })
  seriesNumber?: number;

  @SpeakeasyMetadata({ data: "json, name=seriesSuffix" })
  seriesSuffix?: string;

  @SpeakeasyMetadata({ data: "json, name=songList" })
  songList?: SongListBaseContract;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: ReleaseEventForApiContractStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=tags", elemType: TagUsageForApiContract })
  tags?: TagUsageForApiContract[];

  @SpeakeasyMetadata({ data: "json, name=urlSlug" })
  urlSlug?: string;

  @SpeakeasyMetadata({ data: "json, name=venue" })
  venue?: VenueForApiContractInput;

  @SpeakeasyMetadata({ data: "json, name=venueName" })
  venueName?: string;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: number;

  @SpeakeasyMetadata({ data: "json, name=webLinks", elemType: WebLinkForApiContract })
  webLinks?: WebLinkForApiContract[];
}


export class ReleaseEventForApiContract extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=additionalNames" })
  additionalNames?: string;

  @SpeakeasyMetadata({ data: "json, name=artists", elemType: ArtistForEventContract })
  artists?: ArtistForEventContract[];

  @SpeakeasyMetadata({ data: "json, name=category" })
  category?: ReleaseEventForApiContractCategoryEnum;

  @SpeakeasyMetadata({ data: "json, name=date" })
  date?: Date;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=endDate" })
  endDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=mainPicture" })
  mainPicture?: EntryThumbForApiContract;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=names", elemType: LocalizedStringContract })
  names?: LocalizedStringContract[];

  @SpeakeasyMetadata({ data: "json, name=series" })
  series?: ReleaseEventSeriesContract;

  @SpeakeasyMetadata({ data: "json, name=seriesId" })
  seriesId?: number;

  @SpeakeasyMetadata({ data: "json, name=seriesNumber" })
  seriesNumber?: number;

  @SpeakeasyMetadata({ data: "json, name=seriesSuffix" })
  seriesSuffix?: string;

  @SpeakeasyMetadata({ data: "json, name=songList" })
  songList?: SongListBaseContract;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: ReleaseEventForApiContractStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=tags", elemType: TagUsageForApiContract })
  tags?: TagUsageForApiContract[];

  @SpeakeasyMetadata({ data: "json, name=urlSlug" })
  urlSlug?: string;

  @SpeakeasyMetadata({ data: "json, name=venue" })
  venue?: VenueForApiContract;

  @SpeakeasyMetadata({ data: "json, name=venueName" })
  venueName?: string;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: number;

  @SpeakeasyMetadata({ data: "json, name=webLinks", elemType: WebLinkForApiContract })
  webLinks?: WebLinkForApiContract[];
}
