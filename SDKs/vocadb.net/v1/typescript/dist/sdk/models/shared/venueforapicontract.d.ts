import { SpeakeasyBase } from "../../../internal/utils";
import { OptionalGeoPointContract } from "./optionalgeopointcontract";
import { ReleaseEventContract } from "./releaseeventcontract";
import { LocalizedStringContract } from "./localizedstringcontract";
import { WebLinkForApiContract } from "./weblinkforapicontract";
import { ReleaseEventContractInput } from "./releaseeventcontract";
export declare enum VenueForApiContractStatusEnum {
    Draft = "Draft",
    Finished = "Finished",
    Approved = "Approved",
    Locked = "Locked"
}
export declare class VenueForApiContract extends SpeakeasyBase {
    additionalNames?: string;
    address?: string;
    addressCountryCode?: string;
    coordinates?: OptionalGeoPointContract;
    description?: string;
    events?: ReleaseEventContract[];
    id?: number;
    name?: string;
    names?: LocalizedStringContract[];
    status?: VenueForApiContractStatusEnum;
    version?: number;
    webLinks?: WebLinkForApiContract[];
}
export declare class VenueForApiContractInput extends SpeakeasyBase {
    additionalNames?: string;
    address?: string;
    addressCountryCode?: string;
    coordinates?: OptionalGeoPointContract;
    description?: string;
    events?: ReleaseEventContractInput[];
    id?: number;
    name?: string;
    names?: LocalizedStringContract[];
    status?: VenueForApiContractStatusEnum;
    version?: number;
    webLinks?: WebLinkForApiContract[];
}
