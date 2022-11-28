import { SpeakeasyBase } from "../../../internal/utils";
import { Address } from "./address";
import { Contact } from "./contact";
/**
 * A party that can receive or send invoices
**/
export declare class Party extends SpeakeasyBase {
    address: Address;
    companyName: string;
    contact?: Contact;
}
