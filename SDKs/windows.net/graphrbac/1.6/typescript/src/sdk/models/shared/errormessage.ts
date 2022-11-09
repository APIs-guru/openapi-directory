import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ErrorMessage
/** 
 * Active Directory error message.
**/
export class ErrorMessage extends SpeakeasyBase {
  @Metadata({ data: "json, name=value" })
  value?: string;
}
