import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { QueuedResponseData } from "./queuedresponsedata";



// QueuedResponse
/** 
 * The response received after a [render request](#render-asset) is submitted. The render task is queued for rendering and a unique render id is returned.
**/
export class QueuedResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;

  @SpeakeasyMetadata({ data: "json, name=response" })
  response: QueuedResponseData;

  @SpeakeasyMetadata({ data: "json, name=success" })
  success: boolean;
}
