import { SpeakeasyBase } from "../../../internal/utils";
import { V3StopModel } from "./v3stopmodel";
export declare class V3PatternDeparture extends SpeakeasyBase {
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
    skippedStops?: V3StopModel[];
    stopId?: number;
}
