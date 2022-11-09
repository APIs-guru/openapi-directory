import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { MeasurementUnit } from "./measurementunit";


// OrderQuantityUnit
/** 
 * Contains the measurement unit for a quantity and a precision that
 * specifies the number of digits after the decimal point for decimal quantities.
**/
export class OrderQuantityUnit extends SpeakeasyBase {
  @Metadata({ data: "json, name=catalog_version" })
  catalogVersion?: number;

  @Metadata({ data: "json, name=measurement_unit" })
  measurementUnit?: MeasurementUnit;

  @Metadata({ data: "json, name=precision" })
  precision?: number;
}
