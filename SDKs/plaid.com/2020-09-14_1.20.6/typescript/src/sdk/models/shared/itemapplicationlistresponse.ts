import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ConnectedApplication } from "./connectedapplication";


// ItemApplicationListResponse
/** 
 * Describes the connected application for a particular end user.
**/
export class ItemApplicationListResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=applications", elemType: shared.ConnectedApplication })
  applications: ConnectedApplication[];

  @Metadata({ data: "json, name=request_id" })
  requestId?: string;
}
