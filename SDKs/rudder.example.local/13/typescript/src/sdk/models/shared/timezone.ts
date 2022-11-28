import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Timezone
/** 
 * Timezone information of the node.
**/
export class Timezone extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=offset" })
  offset: string;
}
