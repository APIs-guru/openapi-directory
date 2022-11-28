import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SystemDataSpatialDbGeographyWellKnownValue } from "./systemdataspatialdbgeographywellknownvalue";



export class SystemDataSpatialDbGeography extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=geography" })
  geography?: SystemDataSpatialDbGeographyWellKnownValue;
}
