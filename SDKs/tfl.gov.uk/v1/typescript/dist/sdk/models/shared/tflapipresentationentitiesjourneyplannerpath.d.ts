import { SpeakeasyBase } from "../../../internal/utils";
import { TflApiCommonJourneyPlannerJpElevation } from "./tflapicommonjourneyplannerjpelevation";
import { TflApiPresentationEntitiesIdentifier } from "./tflapipresentationentitiesidentifier";
export declare class TflApiPresentationEntitiesJourneyPlannerPath extends SpeakeasyBase {
    elevation?: TflApiCommonJourneyPlannerJpElevation[];
    lineString?: string;
    stopPoints?: TflApiPresentationEntitiesIdentifier[];
}
