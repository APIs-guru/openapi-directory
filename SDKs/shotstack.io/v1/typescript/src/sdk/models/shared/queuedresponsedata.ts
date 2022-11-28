import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// QueuedResponseData
/** 
 * The response data returned with the [QueuedResponse](#tocs_queuedresponse).
**/
export class QueuedResponseData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;
}
