import { SpeakeasyBase } from "../../../internal/utils";
import { SystemDataSpatialDbGeography } from "./systemdataspatialdbgeography";
export declare class TflApiPresentationEntitiesRoadDisruptionImpactArea extends SpeakeasyBase {
    endDate?: Date;
    endTime?: string;
    id?: number;
    polygon?: SystemDataSpatialDbGeography;
    roadDisruptionId?: string;
    startDate?: Date;
    startTime?: string;
}
