import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PingResponseMeta extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=statusEmoji" })
  statusEmoji: string;
}


// PingResponse
/** 
 * Basic ping response to verify authentication.
 * 
**/
export class PingResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=meta" })
  meta: PingResponseMeta;
}
