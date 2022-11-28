import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class JourneyJourneyResultsPathParams extends SpeakeasyBase {
    from: string;
    to: string;
}
export declare enum JourneyJourneyResultsAccessibilityPreferenceEnum {
    NoRequirements = "NoRequirements",
    NoSolidStairs = "NoSolidStairs",
    NoEscalators = "NoEscalators",
    NoElevators = "NoElevators",
    StepFreeToVehicle = "StepFreeToVehicle",
    StepFreeToPlatform = "StepFreeToPlatform"
}
export declare enum JourneyJourneyResultsBikeProficiencyEnum {
    Easy = "Easy",
    Moderate = "Moderate",
    Fast = "Fast"
}
export declare enum JourneyJourneyResultsCyclePreferenceEnum {
    None = "None",
    LeaveAtStation = "LeaveAtStation",
    TakeOnTransport = "TakeOnTransport",
    AllTheWay = "AllTheWay",
    CycleHire = "CycleHire"
}
export declare enum JourneyJourneyResultsJourneyPreferenceEnum {
    LeastInterchange = "LeastInterchange",
    LeastTime = "LeastTime",
    LeastWalking = "LeastWalking"
}
export declare enum JourneyJourneyResultsTimeIsEnum {
    Arriving = "Arriving",
    Departing = "Departing"
}
export declare enum JourneyJourneyResultsWalkingSpeedEnum {
    Slow = "Slow",
    Average = "Average",
    Fast = "Fast"
}
export declare class JourneyJourneyResultsQueryParams extends SpeakeasyBase {
    accessibilityPreference?: JourneyJourneyResultsAccessibilityPreferenceEnum[];
    adjustment?: string;
    alternativeCycle?: boolean;
    alternativeWalking?: boolean;
    applyHtmlMarkup?: boolean;
    bikeProficiency?: JourneyJourneyResultsBikeProficiencyEnum[];
    cyclePreference?: JourneyJourneyResultsCyclePreferenceEnum;
    date?: string;
    fromName?: string;
    journeyPreference?: JourneyJourneyResultsJourneyPreferenceEnum;
    maxTransferMinutes?: string;
    maxWalkingMinutes?: string;
    mode?: string[];
    nationalSearch?: boolean;
    routeBetweenEntrances?: boolean;
    taxiOnlyTrip?: boolean;
    time?: string;
    timeIs?: JourneyJourneyResultsTimeIsEnum;
    toName?: string;
    useMultiModalCall?: boolean;
    useRealTimeLiveArrivals?: boolean;
    via?: string;
    viaName?: string;
    walkingOptimization?: boolean;
    walkingSpeed?: JourneyJourneyResultsWalkingSpeedEnum;
}
export declare class JourneyJourneyResultsRequest extends SpeakeasyBase {
    pathParams: JourneyJourneyResultsPathParams;
    queryParams: JourneyJourneyResultsQueryParams;
}
export declare class JourneyJourneyResultsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    tflApiPresentationEntitiesJourneyPlannerItineraryResult?: shared.TflApiPresentationEntitiesJourneyPlannerItineraryResult;
}
