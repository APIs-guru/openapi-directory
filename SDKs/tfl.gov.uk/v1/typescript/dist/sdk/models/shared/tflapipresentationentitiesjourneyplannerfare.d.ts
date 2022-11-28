import { SpeakeasyBase } from "../../../internal/utils";
import { TflApiPresentationEntitiesJourneyPlannerFareTap } from "./tflapipresentationentitiesjourneyplannerfaretap";
export declare class TflApiPresentationEntitiesJourneyPlannerFare extends SpeakeasyBase {
    chargeLevel?: string;
    chargeProfileName?: string;
    cost?: number;
    highZone?: number;
    isHopperFare?: boolean;
    lowZone?: number;
    offPeak?: number;
    peak?: number;
    taps?: TflApiPresentationEntitiesJourneyPlannerFareTap[];
}
