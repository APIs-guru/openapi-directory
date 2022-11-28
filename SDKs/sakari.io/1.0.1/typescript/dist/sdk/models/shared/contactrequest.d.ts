import { SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";
export declare class ContactRequestMobile extends SpeakeasyBase {
    country?: string;
    number?: string;
}
export declare class ContactRequest extends SpeakeasyBase {
    attributes?: Map<string, any>;
    email?: string;
    firstName?: string;
    id?: string;
    lastName?: string;
    mobile?: ContactRequestMobile;
    tags?: Tag[];
}
