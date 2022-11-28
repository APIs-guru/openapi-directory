import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TflApiPresentationEntitiesKnownJourney } from "./tflapipresentationentitiesknownjourney";
import { TflApiPresentationEntitiesPeriod } from "./tflapipresentationentitiesperiod";



export class TflApiPresentationEntitiesSchedule extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=firstJourney" })
  firstJourney?: TflApiPresentationEntitiesKnownJourney;

  @SpeakeasyMetadata({ data: "json, name=knownJourneys", elemType: TflApiPresentationEntitiesKnownJourney })
  knownJourneys?: TflApiPresentationEntitiesKnownJourney[];

  @SpeakeasyMetadata({ data: "json, name=lastJourney" })
  lastJourney?: TflApiPresentationEntitiesKnownJourney;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=periods", elemType: TflApiPresentationEntitiesPeriod })
  periods?: TflApiPresentationEntitiesPeriod[];
}
