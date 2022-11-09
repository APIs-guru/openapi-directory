import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { NameFound } from "./namefound";

export enum SummaryGenderEnum {
    Male = "male"
,    Female = "female"
}

export enum SummaryIdentityStatusEnum {
    Found = "found"
,    NotFound = "not_found"
,    Dead = "dead"
}


// Summary
/** 
 * Represents a background check summary
**/
export class Summary extends SpeakeasyBase {
  @Metadata({ data: "json, name=date_of_birth" })
  dateOfBirth?: Date;

  @Metadata({ data: "json, name=death_date" })
  deathDate?: Date;

  @Metadata({ data: "json, name=drivers_license" })
  driversLicense?: string;

  @Metadata({ data: "json, name=gender" })
  gender?: SummaryGenderEnum;

  @Metadata({ data: "json, name=identity_status" })
  identityStatus?: SummaryIdentityStatusEnum;

  @Metadata({ data: "json, name=names_found", elemType: shared.NameFound })
  namesFound: NameFound[];

  @Metadata({ data: "json, name=nss" })
  nss?: string;

  @Metadata({ data: "json, name=rfc" })
  rfc?: string;
}
