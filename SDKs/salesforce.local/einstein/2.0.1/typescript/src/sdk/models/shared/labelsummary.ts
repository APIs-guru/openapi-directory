import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Label } from "./label";



// LabelSummary
/** 
 * Contains the labels array that contains all the labels for the dataset.
**/
export class LabelSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=labels", elemType: Label })
  labels?: Label[];
}
