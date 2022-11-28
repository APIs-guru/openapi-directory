import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class EventsV1SinkSinkValidate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=result" })
  result?: string;
}
