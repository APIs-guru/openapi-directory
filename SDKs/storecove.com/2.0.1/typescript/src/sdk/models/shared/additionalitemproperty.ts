import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AdditionalItemProperty
/** 
 * An additional property for the item
**/
export class AdditionalItemProperty extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value: string;
}
