import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// MemberDto
/** 
 * The MemeberDTO Class.
 * Contains relevant fields of Member DTO by masking actual Member entity's fields in application.
 *             
**/
export class MemberDto extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
