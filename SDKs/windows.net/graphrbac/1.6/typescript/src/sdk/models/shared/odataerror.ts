import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ErrorMessage } from "./errormessage";


// OdataError
/** 
 * Active Directory OData error information.
**/
export class OdataError extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: string;

  @Metadata({ data: "json, name=message" })
  message?: ErrorMessage;
}
