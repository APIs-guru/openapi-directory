import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// LabelResult
/** 
 * label
**/
export class LabelResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=label" })
  label?: string;

  @Metadata({ data: "json, name=probability" })
  probability?: number;
}
