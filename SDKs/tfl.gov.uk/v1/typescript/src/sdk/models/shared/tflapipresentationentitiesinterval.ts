import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class TflApiPresentationEntitiesInterval extends SpeakeasyBase {
  @Metadata({ data: "json, name=stopId" })
  stopId?: string;

  @Metadata({ data: "json, name=timeToArrival" })
  timeToArrival?: number;
}
