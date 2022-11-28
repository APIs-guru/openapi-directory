import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// LabelResult
/** 
 * label
**/
export class LabelResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=label" })
  label?: string;

  @SpeakeasyMetadata({ data: "json, name=probability" })
  probability?: number;
}
