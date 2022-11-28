import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ErrorMessage } from "./errormessage";



// ApiError
/** 
 * API invocation or processing error
**/
export class ApiError extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors", elemType: ErrorMessage })
  errors: ErrorMessage[];
}
