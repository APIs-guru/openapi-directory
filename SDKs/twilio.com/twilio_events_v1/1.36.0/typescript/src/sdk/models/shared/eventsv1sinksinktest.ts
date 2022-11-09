import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class EventsV1SinkSinkTest extends SpeakeasyBase {
  @Metadata({ data: "json, name=result" })
  result?: string;
}
