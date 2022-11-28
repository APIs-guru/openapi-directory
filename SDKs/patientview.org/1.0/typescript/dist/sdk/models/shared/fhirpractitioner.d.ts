import { SpeakeasyBase } from "../../../internal/utils";
import { FhirContact } from "./fhircontact";
export declare class FhirPractitioner extends SpeakeasyBase {
    address1?: string;
    address2?: string;
    address3?: string;
    address4?: string;
    allowInviteGp?: boolean;
    contacts?: FhirContact[];
    gender?: string;
    groupCode?: string;
    identifier?: string;
    inviteDate?: Date;
    name?: string;
    postcode?: string;
    role?: string;
}
