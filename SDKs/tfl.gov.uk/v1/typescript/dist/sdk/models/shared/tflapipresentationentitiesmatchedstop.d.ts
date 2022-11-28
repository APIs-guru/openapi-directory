import { SpeakeasyBase } from "../../../internal/utils";
import { TflApiPresentationEntitiesIdentifier } from "./tflapipresentationentitiesidentifier";
export declare class TflApiPresentationEntitiesMatchedStop extends SpeakeasyBase {
    accessibilitySummary?: string;
    direction?: string;
    hasDisruption?: boolean;
    icsId?: string;
    id?: string;
    lat?: number;
    lines?: TflApiPresentationEntitiesIdentifier[];
    lon?: number;
    modes?: string[];
    name?: string;
    parentId?: string;
    routeId?: number;
    stationId?: string;
    status?: boolean;
    stopLetter?: string;
    stopType?: string;
    topMostParentId?: string;
    towards?: string;
    url?: string;
    zone?: string;
}
