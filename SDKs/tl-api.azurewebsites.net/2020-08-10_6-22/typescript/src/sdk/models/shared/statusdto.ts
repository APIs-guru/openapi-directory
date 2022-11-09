import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// StatusDto
/** 
 * Imideate response for long running api call.
 *             
**/
export class StatusDto extends SpeakeasyBase {
  @Metadata({ data: "json, name=messageId" })
  messageId?: string;

  @Metadata({ data: "json, name=statusText" })
  statusText?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}
