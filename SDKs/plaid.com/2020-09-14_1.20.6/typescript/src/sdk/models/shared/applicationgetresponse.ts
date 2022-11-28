import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Application } from "./application";



// ApplicationGetResponse
/** 
 * The request ID associated with this call.
**/
export class ApplicationGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=application" })
  application: Application;

  @SpeakeasyMetadata({ data: "json, name=request_id" })
  requestId: string;
}
