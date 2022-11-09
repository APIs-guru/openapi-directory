import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AdditionalItemProperty
/** 
 * An additional property for the item
**/
export class AdditionalItemProperty extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=value" })
  value: string;
}
