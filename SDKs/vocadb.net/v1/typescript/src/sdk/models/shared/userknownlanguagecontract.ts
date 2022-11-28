import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum UserKnownLanguageContractProficiencyEnum {
    Nothing = "Nothing",
    Basics = "Basics",
    Intermediate = "Intermediate",
    Advanced = "Advanced",
    Native = "Native"
}


export class UserKnownLanguageContract extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cultureCode" })
  cultureCode?: string;

  @SpeakeasyMetadata({ data: "json, name=proficiency" })
  proficiency?: UserKnownLanguageContractProficiencyEnum;
}
