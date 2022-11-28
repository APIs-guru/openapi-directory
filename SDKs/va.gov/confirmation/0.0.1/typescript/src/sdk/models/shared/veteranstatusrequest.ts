import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum VeteranStatusRequestGenderEnum {
    M = "M",
    F = "F"
}


// VeteranStatusRequest
/** 
 * Attributes required to retrieve a Veteran's status
**/
export class VeteranStatusRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=birth_date" })
  birthDate: string;

  @SpeakeasyMetadata({ data: "json, name=first_name" })
  firstName: string;

  @SpeakeasyMetadata({ data: "json, name=gender" })
  gender?: VeteranStatusRequestGenderEnum;

  @SpeakeasyMetadata({ data: "json, name=last_name" })
  lastName: string;

  @SpeakeasyMetadata({ data: "json, name=middle_name" })
  middleName?: string;

  @SpeakeasyMetadata({ data: "json, name=ssn" })
  ssn: string;
}
