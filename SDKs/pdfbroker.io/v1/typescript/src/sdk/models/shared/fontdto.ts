import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// FontDtoInput
/** 
 * The Font dto object
**/
export class FontDtoInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Style" })
  style?: number;
}
