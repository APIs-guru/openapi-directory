import { SpeakeasyBase } from "../../../internal/utils";
export declare enum UserKnownLanguageContractProficiencyEnum {
    Nothing = "Nothing",
    Basics = "Basics",
    Intermediate = "Intermediate",
    Advanced = "Advanced",
    Native = "Native"
}
export declare class UserKnownLanguageContract extends SpeakeasyBase {
    cultureCode?: string;
    proficiency?: UserKnownLanguageContractProficiencyEnum;
}
