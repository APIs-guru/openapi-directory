import { SpeakeasyBase } from "../../../internal/utils";
import { TflApiPresentationEntitiesMatchedStop } from "./tflapipresentationentitiesmatchedstop";
export declare enum TflApiPresentationEntitiesStopPointSequenceServiceTypeEnum {
    Regular = "Regular",
    Night = "Night"
}
export declare class TflApiPresentationEntitiesStopPointSequence extends SpeakeasyBase {
    branchId?: number;
    direction?: string;
    lineId?: string;
    lineName?: string;
    nextBranchIds?: number[];
    prevBranchIds?: number[];
    serviceType?: TflApiPresentationEntitiesStopPointSequenceServiceTypeEnum;
    stopPoint?: TflApiPresentationEntitiesMatchedStop[];
}
