import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class TflApiPresentationEntitiesInterval extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=stopId" })
  stopId?: string;

  @SpeakeasyMetadata({ data: "json, name=timeToArrival" })
  timeToArrival?: number;
}
