import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OptionalGeoPointContract } from "./optionalgeopointcontract";
import { ReleaseEventContract } from "./releaseeventcontract";
import { LocalizedStringContract } from "./localizedstringcontract";
import { WebLinkForApiContract } from "./weblinkforapicontract";
import { ReleaseEventContractInput } from "./releaseeventcontract";


export enum VenueForApiContractStatusEnum {
    Draft = "Draft",
    Finished = "Finished",
    Approved = "Approved",
    Locked = "Locked"
}


export class VenueForApiContract extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=additionalNames" })
  additionalNames?: string;

  @SpeakeasyMetadata({ data: "json, name=address" })
  address?: string;

  @SpeakeasyMetadata({ data: "json, name=addressCountryCode" })
  addressCountryCode?: string;

  @SpeakeasyMetadata({ data: "json, name=coordinates" })
  coordinates?: OptionalGeoPointContract;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=events", elemType: ReleaseEventContract })
  events?: ReleaseEventContract[];

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=names", elemType: LocalizedStringContract })
  names?: LocalizedStringContract[];

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: VenueForApiContractStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: number;

  @SpeakeasyMetadata({ data: "json, name=webLinks", elemType: WebLinkForApiContract })
  webLinks?: WebLinkForApiContract[];
}


export class VenueForApiContractInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=additionalNames" })
  additionalNames?: string;

  @SpeakeasyMetadata({ data: "json, name=address" })
  address?: string;

  @SpeakeasyMetadata({ data: "json, name=addressCountryCode" })
  addressCountryCode?: string;

  @SpeakeasyMetadata({ data: "json, name=coordinates" })
  coordinates?: OptionalGeoPointContract;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=events", elemType: ReleaseEventContractInput })
  events?: ReleaseEventContractInput[];

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=names", elemType: LocalizedStringContract })
  names?: LocalizedStringContract[];

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: VenueForApiContractStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: number;

  @SpeakeasyMetadata({ data: "json, name=webLinks", elemType: WebLinkForApiContract })
  webLinks?: WebLinkForApiContract[];
}
