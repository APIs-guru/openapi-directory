import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// MemberDto
/** 
 * The MemeberDTO Class.
 * Contains relevant fields of Member DTO by masking actual Member entity's fields in application.
 *             
**/
export class MemberDto extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;
}
