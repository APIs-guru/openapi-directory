import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { V3Status } from "./v3status";



// V3ErrorResponse
/** 
 * An error response
**/
export class V3ErrorResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: V3Status;
}
