import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Geometry } from "./geometry";
import { Properties } from "./properties";


export enum GeoFacilityReadResponseTypeEnum {
    Feature = "Feature"
}


export class GeoFacilityReadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=geometry" })
  geometry: Geometry;

  @SpeakeasyMetadata({ data: "json, name=properties" })
  properties: Properties;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: GeoFacilityReadResponseTypeEnum;
}
