import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// StatusDto
/** 
 * Imideate response for long running api call.
 *             
**/
export class StatusDto extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=messageId" })
  messageId?: string;

  @SpeakeasyMetadata({ data: "json, name=statusText" })
  statusText?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
