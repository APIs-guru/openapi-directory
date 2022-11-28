import { SpeakeasyBase } from "../../../internal/utils";
import { SystemDataSpatialDbGeography } from "./systemdataspatialdbgeography";
export declare class TflApiPresentationEntitiesRoadDisruptionLine extends SpeakeasyBase {
    endDate?: Date;
    endTime?: string;
    id?: number;
    isDiversion?: boolean;
    multiLineString?: SystemDataSpatialDbGeography;
    roadDisruptionId?: string;
    startDate?: Date;
    startTime?: string;
}
