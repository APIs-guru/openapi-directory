import { SpeakeasyBase } from "../../../internal/utils";
import { NameFound } from "./namefound";
export declare enum SummaryGenderEnum {
    Male = "male",
    Female = "female"
}
export declare enum SummaryIdentityStatusEnum {
    Found = "found",
    NotFound = "not_found",
    Dead = "dead"
}
/**
 * Represents a background check summary
**/
export declare class Summary extends SpeakeasyBase {
    dateOfBirth?: Date;
    deathDate?: Date;
    driversLicense?: string;
    gender?: SummaryGenderEnum;
    identityStatus?: SummaryIdentityStatusEnum;
    namesFound: NameFound[];
    nss?: string;
    rfc?: string;
}
