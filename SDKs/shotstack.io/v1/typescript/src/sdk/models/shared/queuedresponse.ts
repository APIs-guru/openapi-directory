import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { QueuedResponseData } from "./queuedresponsedata";


// QueuedResponse
/** 
 * The response received after a [render request](#render-asset) is submitted. The render task is queued for rendering and a unique render id is returned.
**/
export class QueuedResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message: string;

  @Metadata({ data: "json, name=response" })
  response: QueuedResponseData;

  @Metadata({ data: "json, name=success" })
  success: boolean;
}
