import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ValidationError
/** 
 * https://developer.xero.com/documentation/api/http-response-codes
**/
export class ValidationError extends SpeakeasyBase {
  @Metadata({ data: "json, name=Message" })
  message?: string;
}
