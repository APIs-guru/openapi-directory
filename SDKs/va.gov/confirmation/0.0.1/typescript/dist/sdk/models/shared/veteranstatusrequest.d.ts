import { SpeakeasyBase } from "../../../internal/utils";
export declare enum VeteranStatusRequestGenderEnum {
    M = "M",
    F = "F"
}
/**
 * Attributes required to retrieve a Veteran's status
**/
export declare class VeteranStatusRequest extends SpeakeasyBase {
    birthDate: string;
    firstName: string;
    gender?: VeteranStatusRequestGenderEnum;
    lastName: string;
    middleName?: string;
    ssn: string;
}
