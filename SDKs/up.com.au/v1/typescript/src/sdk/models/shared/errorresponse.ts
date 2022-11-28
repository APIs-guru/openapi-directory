import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ErrorObject } from "./errorobject";



// ErrorResponse
/** 
 * Generic error response that returns one or more errors.
 * 
**/
export class ErrorResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors", elemType: ErrorObject })
  errors: ErrorObject[];
}
