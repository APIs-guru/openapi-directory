import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Error } from "./error";


// ErrorResponse
/** 
 * Error response returned by all error conditions in Velo Services
**/
export class ErrorResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=correlationId" })
  correlationId?: string;

  @Metadata({ data: "json, name=errors", elemType: shared.Error })
  errors?: Error[];

  @Metadata({ data: "json, name=httpStatusCode" })
  httpStatusCode?: number;
}
