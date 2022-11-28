import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OptionalGeoPointContract } from "./optionalgeopointcontract";
import { WebLinkContract } from "./weblinkcontract";


export enum VenueContractStatusEnum {
    Draft = "Draft",
    Finished = "Finished",
    Approved = "Approved",
    Locked = "Locked"
}


export class VenueContract extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=additionalNames" })
  additionalNames?: string;

  @SpeakeasyMetadata({ data: "json, name=address" })
  address?: string;

  @SpeakeasyMetadata({ data: "json, name=addressCountryCode" })
  addressCountryCode?: string;

  @SpeakeasyMetadata({ data: "json, name=coordinates" })
  coordinates?: OptionalGeoPointContract;

  @SpeakeasyMetadata({ data: "json, name=deleted" })
  deleted?: boolean;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: VenueContractStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: number;

  @SpeakeasyMetadata({ data: "json, name=webLinks", elemType: WebLinkContract })
  webLinks?: WebLinkContract[];
}
