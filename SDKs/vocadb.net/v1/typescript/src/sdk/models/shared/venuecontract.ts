import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { OptionalGeoPointContract } from "./optionalgeopointcontract";
import { WebLinkContract } from "./weblinkcontract";

export enum VenueContractStatusEnum {
    Draft = "Draft"
,    Finished = "Finished"
,    Approved = "Approved"
,    Locked = "Locked"
}


export class VenueContract extends SpeakeasyBase {
  @Metadata({ data: "json, name=additionalNames" })
  additionalNames?: string;

  @Metadata({ data: "json, name=address" })
  address?: string;

  @Metadata({ data: "json, name=addressCountryCode" })
  addressCountryCode?: string;

  @Metadata({ data: "json, name=coordinates" })
  coordinates?: OptionalGeoPointContract;

  @Metadata({ data: "json, name=deleted" })
  deleted?: boolean;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=status" })
  status?: VenueContractStatusEnum;

  @Metadata({ data: "json, name=version" })
  version?: number;

  @Metadata({ data: "json, name=webLinks", elemType: shared.WebLinkContract })
  webLinks?: WebLinkContract[];
}
