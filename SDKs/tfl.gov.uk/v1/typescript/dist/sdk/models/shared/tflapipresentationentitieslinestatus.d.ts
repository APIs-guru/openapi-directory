import { SpeakeasyBase } from "../../../internal/utils";
import { TflApiPresentationEntitiesDisruption } from "./tflapipresentationentitiesdisruption";
import { TflApiPresentationEntitiesValidityPeriod } from "./tflapipresentationentitiesvalidityperiod";
export declare class TflApiPresentationEntitiesLineStatus extends SpeakeasyBase {
    created?: Date;
    disruption?: TflApiPresentationEntitiesDisruption;
    id?: number;
    lineId?: string;
    modified?: Date;
    reason?: string;
    statusSeverity?: number;
    statusSeverityDescription?: string;
    validityPeriods?: TflApiPresentationEntitiesValidityPeriod[];
}
