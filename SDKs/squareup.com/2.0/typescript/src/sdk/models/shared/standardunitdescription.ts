import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { MeasurementUnit } from "./measurementunit";


// StandardUnitDescription
/** 
 * Contains the name and abbreviation for standard measurement unit.
**/
export class StandardUnitDescription extends SpeakeasyBase {
  @Metadata({ data: "json, name=abbreviation" })
  abbreviation?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=unit" })
  unit?: MeasurementUnit;
}
