import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GeoFacility } from "./geofacility";

export enum GeoFacilitiesResponseTypeEnum {
    FeatureCollection = "FeatureCollection"
}


export class GeoFacilitiesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=features", elemType: shared.GeoFacility })
  features?: GeoFacility[];

  @Metadata({ data: "json, name=type" })
  type: GeoFacilitiesResponseTypeEnum;
}
