import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Timezone
/** 
 * Timezone information of the node.
**/
export class Timezone extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=offset" })
  offset: string;
}
