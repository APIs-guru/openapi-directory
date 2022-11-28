import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NameFound } from "./namefound";


export enum SummaryGenderEnum {
    Male = "male",
    Female = "female"
}

export enum SummaryIdentityStatusEnum {
    Found = "found",
    NotFound = "not_found",
    Dead = "dead"
}


// Summary
/** 
 * Represents a background check summary
**/
export class Summary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=date_of_birth" })
  dateOfBirth?: Date;

  @SpeakeasyMetadata({ data: "json, name=death_date" })
  deathDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=drivers_license" })
  driversLicense?: string;

  @SpeakeasyMetadata({ data: "json, name=gender" })
  gender?: SummaryGenderEnum;

  @SpeakeasyMetadata({ data: "json, name=identity_status" })
  identityStatus?: SummaryIdentityStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=names_found", elemType: NameFound })
  namesFound: NameFound[];

  @SpeakeasyMetadata({ data: "json, name=nss" })
  nss?: string;

  @SpeakeasyMetadata({ data: "json, name=rfc" })
  rfc?: string;
}
