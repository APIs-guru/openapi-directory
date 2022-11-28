import { SpeakeasyBase } from "../../../internal/utils";
import { Address } from "./address";
export declare class DeliveryLocation extends SpeakeasyBase {
    address?: Address;
    id?: string;
    schemeAgencyId?: string;
    schemeId?: string;
}
export declare class Delivery extends SpeakeasyBase {
    actualDate?: string;
    location?: DeliveryLocation;
    quantity?: number;
}
