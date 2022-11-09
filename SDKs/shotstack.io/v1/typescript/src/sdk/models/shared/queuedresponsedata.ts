import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// QueuedResponseData
/** 
 * The response data returned with the [QueuedResponse](#tocs_queuedresponse).
**/
export class QueuedResponseData extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=message" })
  message: string;
}
