import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum UserKnownLanguageContractProficiencyEnum {
    Nothing = "Nothing"
,    Basics = "Basics"
,    Intermediate = "Intermediate"
,    Advanced = "Advanced"
,    Native = "Native"
}


export class UserKnownLanguageContract extends SpeakeasyBase {
  @Metadata({ data: "json, name=cultureCode" })
  cultureCode?: string;

  @Metadata({ data: "json, name=proficiency" })
  proficiency?: UserKnownLanguageContractProficiencyEnum;
}
