import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ReleaseEventForApiContract } from "./releaseeventforapicontract";
import { EntryThumbForApiContract } from "./entrythumbforapicontract";
import { LocalizedStringContract } from "./localizedstringcontract";
import { WebLinkForApiContract } from "./weblinkforapicontract";

export enum ReleaseEventSeriesForApiContractCategoryEnum {
    Unspecified = "Unspecified"
,    AlbumRelease = "AlbumRelease"
,    Anniversary = "Anniversary"
,    Club = "Club"
,    Concert = "Concert"
,    Contest = "Contest"
,    Convention = "Convention"
,    Other = "Other"
}

export enum ReleaseEventSeriesForApiContractStatusEnum {
    Draft = "Draft"
,    Finished = "Finished"
,    Approved = "Approved"
,    Locked = "Locked"
}


export class ReleaseEventSeriesForApiContract extends SpeakeasyBase {
  @Metadata({ data: "json, name=additionalNames" })
  additionalNames?: string;

  @Metadata({ data: "json, name=category" })
  category?: ReleaseEventSeriesForApiContractCategoryEnum;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=events", elemType: shared.ReleaseEventForApiContract })
  events?: ReleaseEventForApiContract[];

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=mainPicture" })
  mainPicture?: EntryThumbForApiContract;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=names", elemType: shared.LocalizedStringContract })
  names?: LocalizedStringContract[];

  @Metadata({ data: "json, name=status" })
  status?: ReleaseEventSeriesForApiContractStatusEnum;

  @Metadata({ data: "json, name=urlSlug" })
  urlSlug?: string;

  @Metadata({ data: "json, name=version" })
  version?: number;

  @Metadata({ data: "json, name=webLinks", elemType: shared.WebLinkForApiContract })
  webLinks?: WebLinkForApiContract[];
}
