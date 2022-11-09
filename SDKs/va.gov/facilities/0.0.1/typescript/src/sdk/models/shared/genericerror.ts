import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GenericError
/** 
 * A general error json response for things like Authorization Errors or Bad Requests (ex. invalid parameter values).
**/
export class GenericError extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message: string;
}
