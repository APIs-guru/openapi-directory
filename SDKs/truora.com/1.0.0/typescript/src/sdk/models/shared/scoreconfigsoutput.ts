import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ScoreConfigOutput } from "./scoreconfigoutput";



// ScoreConfigsOutput
/** 
 * The result of an operation that returns multiple score configs
**/
export class ScoreConfigsOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=score_configs", elemType: ScoreConfigOutput })
  scoreConfigs: ScoreConfigOutput[];
}
