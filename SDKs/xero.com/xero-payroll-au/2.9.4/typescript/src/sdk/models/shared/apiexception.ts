import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ApiException
/** 
 * The object returned for a bad request
**/
export class ApiException extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ErrorNumber" })
  errorNumber?: number;

  @SpeakeasyMetadata({ data: "json, name=Message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type?: string;
}
