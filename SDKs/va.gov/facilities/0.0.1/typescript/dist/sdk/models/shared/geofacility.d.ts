import { SpeakeasyBase } from "../../../internal/utils";
import { Geometry } from "./geometry";
import { Properties } from "./properties";
export declare enum GeoFacilityTypeEnum {
    Feature = "Feature"
}
/**
 * GeoJSON-complaint Feature object describing a VA Facility
**/
export declare class GeoFacility extends SpeakeasyBase {
    geometry: Geometry;
    properties: Properties;
    type: GeoFacilityTypeEnum;
}
