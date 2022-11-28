import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
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
  @SpeakeasyMetadata({ data: "json, name=geometry" })
  geometry: Geometry;

  @SpeakeasyMetadata({ data: "json, name=properties" })
  properties: Properties;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: GeoFacilityTypeEnum;
}
