import { SpeakeasyBase } from "../../../internal/utils";
import { NearbyAttributes } from "./nearbyattributes";
export declare enum NearbyTypeEnum {
    NearbyFacility = "NearbyFacility"
}
/**
 * JSON API-compliant object describing a nearby VA facility
**/
export declare class Nearby extends SpeakeasyBase {
    attributes: NearbyAttributes;
    id: string;
    type: NearbyTypeEnum;
}
