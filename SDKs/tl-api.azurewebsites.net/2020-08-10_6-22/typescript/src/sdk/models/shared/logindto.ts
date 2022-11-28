import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// LoginDto
/** 
 * The LoginDTO Class.
 * Contains relevant fields of Login DTO.
 *             
**/
export class LoginDto extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=password" })
  password?: string;

  @SpeakeasyMetadata({ data: "json, name=remember" })
  remember?: boolean;

  @SpeakeasyMetadata({ data: "json, name=username" })
  username?: string;
}
