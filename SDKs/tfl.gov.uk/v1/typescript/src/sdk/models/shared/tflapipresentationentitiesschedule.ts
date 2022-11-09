import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { TflApiPresentationEntitiesKnownJourney } from "./tflapipresentationentitiesknownjourney";
import { TflApiPresentationEntitiesKnownJourney } from "./tflapipresentationentitiesknownjourney";
import { TflApiPresentationEntitiesKnownJourney } from "./tflapipresentationentitiesknownjourney";
import { TflApiPresentationEntitiesPeriod } from "./tflapipresentationentitiesperiod";


export class TflApiPresentationEntitiesSchedule extends SpeakeasyBase {
  @Metadata({ data: "json, name=firstJourney" })
  firstJourney?: TflApiPresentationEntitiesKnownJourney;

  @Metadata({ data: "json, name=knownJourneys", elemType: shared.TflApiPresentationEntitiesKnownJourney })
  knownJourneys?: TflApiPresentationEntitiesKnownJourney[];

  @Metadata({ data: "json, name=lastJourney" })
  lastJourney?: TflApiPresentationEntitiesKnownJourney;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=periods", elemType: shared.TflApiPresentationEntitiesPeriod })
  periods?: TflApiPresentationEntitiesPeriod[];
}
