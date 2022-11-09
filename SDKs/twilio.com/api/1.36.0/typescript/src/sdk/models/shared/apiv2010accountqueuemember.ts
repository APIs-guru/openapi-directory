import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ApiV2010AccountQueueMember extends SpeakeasyBase {
  @Metadata({ data: "json, name=call_sid" })
  callSid?: string;

  @Metadata({ data: "json, name=date_enqueued" })
  dateEnqueued?: string;

  @Metadata({ data: "json, name=position" })
  position?: number;

  @Metadata({ data: "json, name=queue_sid" })
  queueSid?: string;

  @Metadata({ data: "json, name=uri" })
  uri?: string;

  @Metadata({ data: "json, name=wait_time" })
  waitTime?: number;
}
