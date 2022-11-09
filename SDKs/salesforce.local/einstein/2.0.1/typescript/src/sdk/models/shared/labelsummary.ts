import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Label } from "./label";


// LabelSummary
/** 
 * Contains the labels array that contains all the labels for the dataset.
**/
export class LabelSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=labels", elemType: shared.Label })
  labels?: Label[];
}
