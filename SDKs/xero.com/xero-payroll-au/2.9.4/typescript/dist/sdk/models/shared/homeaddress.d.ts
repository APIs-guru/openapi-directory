import { SpeakeasyBase } from "../../../internal/utils";
import { StateEnum } from "./stateenum";
export declare class HomeAddress extends SpeakeasyBase {
    addressLine1: string;
    addressLine2?: string;
    city?: string;
    country?: string;
    postalCode?: string;
    region?: StateEnum;
}
