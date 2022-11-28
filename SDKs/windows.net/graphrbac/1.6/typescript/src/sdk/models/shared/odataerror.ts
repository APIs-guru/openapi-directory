import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ErrorMessage } from "./errormessage";



// OdataError
/** 
 * Active Directory OData error information.
**/
export class OdataError extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: ErrorMessage;
}
