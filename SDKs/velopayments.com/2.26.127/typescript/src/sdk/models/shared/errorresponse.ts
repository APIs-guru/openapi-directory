import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Error } from "./error";



// ErrorResponse
/** 
 * Error response returned by all error conditions in Velo Services
**/
export class ErrorResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=correlationId" })
  correlationId?: string;

  @SpeakeasyMetadata({ data: "json, name=errors", elemType: Error })
  errors?: Error[];

  @SpeakeasyMetadata({ data: "json, name=httpStatusCode" })
  httpStatusCode?: number;
}
