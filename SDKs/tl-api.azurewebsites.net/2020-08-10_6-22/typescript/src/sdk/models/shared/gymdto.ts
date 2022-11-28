import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GymDto
/** 
 * The GymDTO Class.
 * Contains relevant fields of Gym DTO by masking actual Gym entity's fields in application.
 *             
**/
export class GymDto extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=externalGymNumber" })
  externalGymNumber?: number;

  @SpeakeasyMetadata({ data: "json, name=gymId" })
  gymId?: number;

  @SpeakeasyMetadata({ data: "json, name=gymName" })
  gymName?: string;

  @SpeakeasyMetadata({ data: "json, name=location" })
  location?: string;
}
