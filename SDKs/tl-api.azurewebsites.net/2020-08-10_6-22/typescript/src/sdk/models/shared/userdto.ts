import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// UserDto
/** 
 * The UserDTO Class.
 * Contains relevant fields of User DTO by masking actual User entity's fields in application.
 *             
**/
export class UserDto extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountNumber" })
  accountNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=externalEntityNumber" })
  externalEntityNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=guardian" })
  guardian?: number;

  @SpeakeasyMetadata({ data: "json, name=gymNumber" })
  gymNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=introduceBy" })
  introduceBy?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=number" })
  number?: string;

  @SpeakeasyMetadata({ data: "json, name=typeId" })
  typeId?: number;

  @SpeakeasyMetadata({ data: "json, name=userId" })
  userId?: number;
}
