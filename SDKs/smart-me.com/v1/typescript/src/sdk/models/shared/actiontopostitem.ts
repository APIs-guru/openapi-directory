import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ActionToPostItem
/** 
 * Container class for an action item
**/
export class ActionToPostItem extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ObisCode" })
  obisCode?: string;

  @SpeakeasyMetadata({ data: "json, name=Value" })
  value?: number;
}
