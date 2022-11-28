import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TflApiCommonJourneyPlannerJpElevation } from "./tflapicommonjourneyplannerjpelevation";
import { TflApiPresentationEntitiesIdentifier } from "./tflapipresentationentitiesidentifier";



export class TflApiPresentationEntitiesJourneyPlannerPath extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=elevation", elemType: TflApiCommonJourneyPlannerJpElevation })
  elevation?: TflApiCommonJourneyPlannerJpElevation[];

  @SpeakeasyMetadata({ data: "json, name=lineString" })
  lineString?: string;

  @SpeakeasyMetadata({ data: "json, name=stopPoints", elemType: TflApiPresentationEntitiesIdentifier })
  stopPoints?: TflApiPresentationEntitiesIdentifier[];
}
