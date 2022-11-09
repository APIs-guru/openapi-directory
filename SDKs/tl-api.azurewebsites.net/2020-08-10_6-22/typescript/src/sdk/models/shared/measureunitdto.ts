import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// MeasureUnitDto
/** 
 * Mesure unit to represent article mesure unit 
**/
export class MeasureUnitDto extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;
}
