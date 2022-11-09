import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// LoginDto
/** 
 * The LoginDTO Class.
 * Contains relevant fields of Login DTO.
 *             
**/
export class LoginDto extends SpeakeasyBase {
  @Metadata({ data: "json, name=password" })
  password?: string;

  @Metadata({ data: "json, name=remember" })
  remember?: boolean;

  @Metadata({ data: "json, name=username" })
  username?: string;
}
