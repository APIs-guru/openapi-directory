import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// UserDto
/** 
 * The UserDTO Class.
 * Contains relevant fields of User DTO by masking actual User entity's fields in application.
 *             
**/
export class UserDto extends SpeakeasyBase {
  @Metadata({ data: "json, name=accountNumber" })
  accountNumber?: string;

  @Metadata({ data: "json, name=externalEntityNumber" })
  externalEntityNumber?: string;

  @Metadata({ data: "json, name=guardian" })
  guardian?: number;

  @Metadata({ data: "json, name=gymNumber" })
  gymNumber?: string;

  @Metadata({ data: "json, name=introduceBy" })
  introduceBy?: number;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=number" })
  number?: string;

  @Metadata({ data: "json, name=typeId" })
  typeId?: number;

  @Metadata({ data: "json, name=userId" })
  userId?: number;
}
