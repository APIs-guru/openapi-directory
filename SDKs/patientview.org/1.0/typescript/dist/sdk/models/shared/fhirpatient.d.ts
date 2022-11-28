import { SpeakeasyBase } from "../../../internal/utils";
import { FhirContact } from "./fhircontact";
import { Group } from "./group";
import { FhirIdentifier } from "./fhiridentifier";
import { FhirPractitioner } from "./fhirpractitioner";
export declare class FhirPatient extends SpeakeasyBase {
    address1?: string;
    address2?: string;
    address3?: string;
    address4?: string;
    contacts?: FhirContact[];
    dateOfBirth?: Date;
    dateOfBirthNoTime?: string;
    forename?: string;
    gender?: string;
    group?: Group;
    groupCode?: string;
    identifier?: string;
    identifiers?: FhirIdentifier[];
    postcode?: string;
    practitioners?: FhirPractitioner[];
    surname?: string;
}
