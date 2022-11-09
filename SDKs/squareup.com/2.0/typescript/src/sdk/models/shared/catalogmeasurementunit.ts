import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { MeasurementUnit } from "./measurementunit";


// CatalogMeasurementUnit
/** 
 * Represents the unit used to measure a `CatalogItemVariation` and
 * specifies the precision for decimal quantities.
**/
export class CatalogMeasurementUnit extends SpeakeasyBase {
  @Metadata({ data: "json, name=measurement_unit" })
  measurementUnit?: MeasurementUnit;

  @Metadata({ data: "json, name=precision" })
  precision?: number;
}
