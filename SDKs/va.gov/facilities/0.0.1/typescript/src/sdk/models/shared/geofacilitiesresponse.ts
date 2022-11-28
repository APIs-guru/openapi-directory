import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GeoFacility } from "./geofacility";


export enum GeoFacilitiesResponseTypeEnum {
    FeatureCollection = "FeatureCollection"
}


export class GeoFacilitiesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=features", elemType: GeoFacility })
  features?: GeoFacility[];

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: GeoFacilitiesResponseTypeEnum;
}
