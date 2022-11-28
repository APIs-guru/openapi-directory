import { SpeakeasyBase } from "../../../internal/utils";
import { TflApiPresentationEntitiesCrowding } from "./tflapipresentationentitiescrowding";
import { TflApiPresentationEntitiesDisruption } from "./tflapipresentationentitiesdisruption";
import { TflApiPresentationEntitiesLineStatus } from "./tflapipresentationentitieslinestatus";
import { TflApiPresentationEntitiesMatchedRoute } from "./tflapipresentationentitiesmatchedroute";
import { TflApiPresentationEntitiesLineServiceTypeInfo } from "./tflapipresentationentitieslineservicetypeinfo";
export declare class TflApiPresentationEntitiesLine extends SpeakeasyBase {
    created?: Date;
    crowding?: TflApiPresentationEntitiesCrowding;
    disruptions?: TflApiPresentationEntitiesDisruption[];
    id?: string;
    lineStatuses?: TflApiPresentationEntitiesLineStatus[];
    modeName?: string;
    modified?: Date;
    name?: string;
    routeSections?: TflApiPresentationEntitiesMatchedRoute[];
    serviceTypes?: TflApiPresentationEntitiesLineServiceTypeInfo[];
}
