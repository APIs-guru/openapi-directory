import { SpeakeasyBase } from "../../../internal/utils";
import { CountryEnum } from "./countryenum";
/**
 * The address
**/
export declare class Address extends SpeakeasyBase {
    city?: string;
    country: CountryEnum;
    county?: string;
    street1?: string;
    street2?: string;
    zip?: string;
}
