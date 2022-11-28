import { SpeakeasyBase } from "../../../internal/utils";
import { TflApiPresentationEntitiesRouteSectionNaptanEntrySequence } from "./tflapipresentationentitiesroutesectionnaptanentrysequence";
export declare class TflApiPresentationEntitiesRouteSection extends SpeakeasyBase {
    destinationName?: string;
    direction?: string;
    id?: string;
    lineId?: string;
    lineString?: string;
    name?: string;
    originationName?: string;
    routeCode?: string;
    routeSectionNaptanEntrySequence?: TflApiPresentationEntitiesRouteSectionNaptanEntrySequence[];
    validFrom?: Date;
    validTo?: Date;
}
