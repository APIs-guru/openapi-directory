import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Application } from "./application";


// ApplicationGetResponse
/** 
 * The request ID associated with this call.
**/
export class ApplicationGetResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=application" })
  application: Application;

  @Metadata({ data: "json, name=request_id" })
  requestId: string;
}
