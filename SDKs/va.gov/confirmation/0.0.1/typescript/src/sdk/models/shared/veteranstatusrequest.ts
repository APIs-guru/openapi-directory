import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum VeteranStatusRequestGenderEnum {
    M = "M"
,    F = "F"
}


// VeteranStatusRequest
/** 
 * Attributes required to retrieve a Veteran's status
**/
export class VeteranStatusRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=birth_date" })
  birthDate: string;

  @Metadata({ data: "json, name=first_name" })
  firstName: string;

  @Metadata({ data: "json, name=gender" })
  gender?: VeteranStatusRequestGenderEnum;

  @Metadata({ data: "json, name=last_name" })
  lastName: string;

  @Metadata({ data: "json, name=middle_name" })
  middleName?: string;

  @Metadata({ data: "json, name=ssn" })
  ssn: string;
}
