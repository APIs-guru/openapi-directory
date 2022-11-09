import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// MeasurementUnitCustom
/** 
 * The information needed to define a custom unit, provided by the seller.
**/
export class MeasurementUnitCustom extends SpeakeasyBase {
  @Metadata({ data: "json, name=abbreviation" })
  abbreviation: string;

  @Metadata({ data: "json, name=name" })
  name: string;
}
