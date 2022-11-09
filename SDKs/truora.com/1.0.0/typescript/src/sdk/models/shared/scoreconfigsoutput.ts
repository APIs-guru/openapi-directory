import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ScoreConfigOutput } from "./scoreconfigoutput";


// ScoreConfigsOutput
/** 
 * The result of an operation that returns multiple score configs
**/
export class ScoreConfigsOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=score_configs", elemType: shared.ScoreConfigOutput })
  scoreConfigs: ScoreConfigOutput[];
}
