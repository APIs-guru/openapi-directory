import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Change } from "./change";


// Change
/** 
 * Represents changes in check scores between continuous checks
**/
export class Change extends SpeakeasyBase {
  @Metadata({ data: "json, name=dataset_score_changes" })
  datasetScoreChanges?: number;

  @Metadata({ data: "json, name=score_changes", elemType: shared.Change })
  scoreChanges?: Change[];
}
