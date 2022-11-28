import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PingResponseMeta extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=statusEmoji" })
  statusEmoji: string;
}


// PingResponse
/** 
 * Basic ping response to verify authentication.
 * 
**/
export class PingResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta: PingResponseMeta;
}
