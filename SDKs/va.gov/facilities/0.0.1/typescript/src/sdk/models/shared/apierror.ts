import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ErrorMessage } from "./errormessage";


// ApiError
/** 
 * API invocation or processing error
**/
export class ApiError extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorMessage })
  errors: ErrorMessage[];
}
