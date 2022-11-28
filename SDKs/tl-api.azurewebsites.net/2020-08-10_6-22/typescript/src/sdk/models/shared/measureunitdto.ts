import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// MeasureUnitDto
/** 
 * Mesure unit to represent article mesure unit 
**/
export class MeasureUnitDto extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}
