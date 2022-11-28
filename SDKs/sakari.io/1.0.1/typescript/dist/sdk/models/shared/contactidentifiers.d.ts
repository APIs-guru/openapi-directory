import { SpeakeasyBase } from "../../../internal/utils";
export declare class ContactIdentifiersMobile extends SpeakeasyBase {
    country?: string;
    number?: string;
}
export declare class ContactIdentifiers extends SpeakeasyBase {
    email?: string;
    firstName?: string;
    id?: string;
    lastName?: string;
    mobile?: ContactIdentifiersMobile;
}
