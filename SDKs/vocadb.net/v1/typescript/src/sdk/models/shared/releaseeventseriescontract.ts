import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { WebLinkContract } from "./weblinkcontract";

export enum ReleaseEventSeriesContractCategoryEnum {
    Unspecified = "Unspecified"
,    AlbumRelease = "AlbumRelease"
,    Anniversary = "Anniversary"
,    Club = "Club"
,    Concert = "Concert"
,    Contest = "Contest"
,    Convention = "Convention"
,    Other = "Other"
}

export enum ReleaseEventSeriesContractStatusEnum {
    Draft = "Draft"
,    Finished = "Finished"
,    Approved = "Approved"
,    Locked = "Locked"
}


export class ReleaseEventSeriesContract extends SpeakeasyBase {
  @Metadata({ data: "json, name=additionalNames" })
  additionalNames?: string;

  @Metadata({ data: "json, name=category" })
  category?: ReleaseEventSeriesContractCategoryEnum;

  @Metadata({ data: "json, name=deleted" })
  deleted?: boolean;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=pictureMime" })
  pictureMime?: string;

  @Metadata({ data: "json, name=status" })
  status?: ReleaseEventSeriesContractStatusEnum;

  @Metadata({ data: "json, name=urlSlug" })
  urlSlug?: string;

  @Metadata({ data: "json, name=version" })
  version?: number;

  @Metadata({ data: "json, name=webLinks", elemType: shared.WebLinkContract })
  webLinks?: WebLinkContract[];
}
