import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ErrorObject } from "./errorobject";


// ErrorResponse
/** 
 * Generic error response that returns one or more errors.
 * 
**/
export class ErrorResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors: ErrorObject[];
}
