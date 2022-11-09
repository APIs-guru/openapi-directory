import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SystemDataSpatialDbGeographyWellKnownValue } from "./systemdataspatialdbgeographywellknownvalue";


export class SystemDataSpatialDbGeography extends SpeakeasyBase {
  @Metadata({ data: "json, name=geography" })
  geography?: SystemDataSpatialDbGeographyWellKnownValue;
}
