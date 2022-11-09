import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GymDto
/** 
 * The GymDTO Class.
 * Contains relevant fields of Gym DTO by masking actual Gym entity's fields in application.
 *             
**/
export class GymDto extends SpeakeasyBase {
  @Metadata({ data: "json, name=externalGymNumber" })
  externalGymNumber?: number;

  @Metadata({ data: "json, name=gymId" })
  gymId?: number;

  @Metadata({ data: "json, name=gymName" })
  gymName?: string;

  @Metadata({ data: "json, name=location" })
  location?: string;
}
