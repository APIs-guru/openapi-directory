import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { V3Status } from "./v3status";


// V3ErrorResponse
/** 
 * An error response
**/
export class V3ErrorResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;

  @Metadata({ data: "json, name=status" })
  status?: V3Status;
}
