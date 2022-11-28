import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Change
/** 
 * Represents changes in check scores between continuous checks
**/
export class Change extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dataset_score_changes" })
  datasetScoreChanges?: number;

  @SpeakeasyMetadata({ data: "json, name=score_changes", elemType: Change })
  scoreChanges?: Change[];
}
