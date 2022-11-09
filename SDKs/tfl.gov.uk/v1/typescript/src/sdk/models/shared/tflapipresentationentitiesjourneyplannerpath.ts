import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { TflApiCommonJourneyPlannerJpElevation } from "./tflapicommonjourneyplannerjpelevation";
import { TflApiPresentationEntitiesIdentifier } from "./tflapipresentationentitiesidentifier";


export class TflApiPresentationEntitiesJourneyPlannerPath extends SpeakeasyBase {
  @Metadata({ data: "json, name=elevation", elemType: shared.TflApiCommonJourneyPlannerJpElevation })
  elevation?: TflApiCommonJourneyPlannerJpElevation[];

  @Metadata({ data: "json, name=lineString" })
  lineString?: string;

  @Metadata({ data: "json, name=stopPoints", elemType: shared.TflApiPresentationEntitiesIdentifier })
  stopPoints?: TflApiPresentationEntitiesIdentifier[];
}
