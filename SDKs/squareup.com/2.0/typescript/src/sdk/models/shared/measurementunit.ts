import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { MeasurementUnitCustom } from "./measurementunitcustom";


// MeasurementUnit
/** 
 * Represents a unit of measurement to use with a quantity, such as ounces
 * or inches. Exactly one of the following fields are required: `custom_unit`,
 * `area_unit`, `length_unit`, `volume_unit`, and `weight_unit`.
**/
export class MeasurementUnit extends SpeakeasyBase {
  @Metadata({ data: "json, name=area_unit" })
  areaUnit?: string;

  @Metadata({ data: "json, name=custom_unit" })
  customUnit?: MeasurementUnitCustom;

  @Metadata({ data: "json, name=generic_unit" })
  genericUnit?: string;

  @Metadata({ data: "json, name=length_unit" })
  lengthUnit?: string;

  @Metadata({ data: "json, name=time_unit" })
  timeUnit?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;

  @Metadata({ data: "json, name=volume_unit" })
  volumeUnit?: string;

  @Metadata({ data: "json, name=weight_unit" })
  weightUnit?: string;
}
