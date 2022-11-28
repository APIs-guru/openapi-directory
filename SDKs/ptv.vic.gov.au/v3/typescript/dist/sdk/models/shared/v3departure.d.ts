import { SpeakeasyBase } from "../../../internal/utils";
export declare class V3Departure extends SpeakeasyBase {
    atPlatform?: boolean;
    departureSequence?: number;
    directionId?: number;
    disruptionIds?: number[];
    estimatedDepartureUtc?: Date;
    flags?: string;
    platformNumber?: string;
    routeId?: number;
    runId?: number;
    runRef?: string;
    scheduledDepartureUtc?: Date;
    stopId?: number;
}
