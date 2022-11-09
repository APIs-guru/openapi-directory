import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Geometry } from "./geometry";
import { Properties } from "./properties";

export enum GeoFacilityTypeEnum {
    Feature = "Feature"
}


// GeoFacility
/** 
 * GeoJSON-complaint Feature object describing a VA Facility
**/
export class GeoFacility extends SpeakeasyBase {
  @Metadata({ data: "json, name=geometry" })
  geometry: Geometry;

  @Metadata({ data: "json, name=properties" })
  properties: Properties;

  @Metadata({ data: "json, name=type" })
  type: GeoFacilityTypeEnum;
}
