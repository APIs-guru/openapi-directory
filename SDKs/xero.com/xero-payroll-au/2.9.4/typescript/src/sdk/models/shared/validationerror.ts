import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ValidationError
/** 
 * https://developer.xero.com/documentation/api/http-response-codes
**/
export class ValidationError extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Message" })
  message?: string;
}
