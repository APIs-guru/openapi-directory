import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ErrorMessage
/** 
 * Active Directory error message.
**/
export class ErrorMessage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}
