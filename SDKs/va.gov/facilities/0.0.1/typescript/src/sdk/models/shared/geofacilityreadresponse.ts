import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Geometry } from "./geometry";
import { Properties } from "./properties";

export enum GeoFacilityReadResponseTypeEnum {
    Feature = "Feature"
}


export class GeoFacilityReadResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=geometry" })
  geometry: Geometry;

  @Metadata({ data: "json, name=properties" })
  properties: Properties;

  @Metadata({ data: "json, name=type" })
  type: GeoFacilityReadResponseTypeEnum;
}
