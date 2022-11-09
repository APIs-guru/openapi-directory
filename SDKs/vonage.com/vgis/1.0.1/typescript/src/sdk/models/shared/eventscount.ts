import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class EventsCount extends SpeakeasyBase {
  @Metadata({ data: "json, name=count" })
  count?: number;
}
