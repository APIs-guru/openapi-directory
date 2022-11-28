import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ConnectedApplication } from "./connectedapplication";



// ItemApplicationListResponse
/** 
 * Describes the connected application for a particular end user.
**/
export class ItemApplicationListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=applications", elemType: ConnectedApplication })
  applications: ConnectedApplication[];

  @SpeakeasyMetadata({ data: "json, name=request_id" })
  requestId?: string;
}
