import { SpeakeasyBase } from "../../../internal/utils";
import { OptionalGeoPointContract } from "./optionalgeopointcontract";
import { WebLinkContract } from "./weblinkcontract";
export declare enum VenueContractStatusEnum {
    Draft = "Draft",
    Finished = "Finished",
    Approved = "Approved",
    Locked = "Locked"
}
export declare class VenueContract extends SpeakeasyBase {
    additionalNames?: string;
    address?: string;
    addressCountryCode?: string;
    coordinates?: OptionalGeoPointContract;
    deleted?: boolean;
    description?: string;
    id?: number;
    name?: string;
    status?: VenueContractStatusEnum;
    version?: number;
    webLinks?: WebLinkContract[];
}
