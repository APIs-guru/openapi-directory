import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class EventsV1SinkSinkTest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=result" })
  result?: string;
}
