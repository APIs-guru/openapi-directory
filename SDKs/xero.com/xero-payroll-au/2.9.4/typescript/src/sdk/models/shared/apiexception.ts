import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ApiException
/** 
 * The object returned for a bad request
**/
export class ApiException extends SpeakeasyBase {
  @Metadata({ data: "json, name=ErrorNumber" })
  errorNumber?: number;

  @Metadata({ data: "json, name=Message" })
  message?: string;

  @Metadata({ data: "json, name=Type" })
  type?: string;
}
