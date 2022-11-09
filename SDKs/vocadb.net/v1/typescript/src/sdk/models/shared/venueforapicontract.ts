import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { OptionalGeoPointContract } from "./optionalgeopointcontract";
import { ReleaseEventContract } from "./releaseeventcontract";
import { LocalizedStringContract } from "./localizedstringcontract";
import { WebLinkForApiContract } from "./weblinkforapicontract";

export enum VenueForApiContractStatusEnum {
    Draft = "Draft"
,    Finished = "Finished"
,    Approved = "Approved"
,    Locked = "Locked"
}


export class VenueForApiContract extends SpeakeasyBase {
  @Metadata({ data: "json, name=additionalNames" })
  additionalNames?: string;

  @Metadata({ data: "json, name=address" })
  address?: string;

  @Metadata({ data: "json, name=addressCountryCode" })
  addressCountryCode?: string;

  @Metadata({ data: "json, name=coordinates" })
  coordinates?: OptionalGeoPointContract;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=events", elemType: shared.ReleaseEventContract })
  events?: ReleaseEventContract[];

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=names", elemType: shared.LocalizedStringContract })
  names?: LocalizedStringContract[];

  @Metadata({ data: "json, name=status" })
  status?: VenueForApiContractStatusEnum;

  @Metadata({ data: "json, name=version" })
  version?: number;

  @Metadata({ data: "json, name=webLinks", elemType: shared.WebLinkForApiContract })
  webLinks?: WebLinkForApiContract[];
}
