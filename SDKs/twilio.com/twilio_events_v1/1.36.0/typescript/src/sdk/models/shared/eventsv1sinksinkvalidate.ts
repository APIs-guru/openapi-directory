import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class EventsV1SinkSinkValidate extends SpeakeasyBase {
  @Metadata({ data: "json, name=result" })
  result?: string;
}
