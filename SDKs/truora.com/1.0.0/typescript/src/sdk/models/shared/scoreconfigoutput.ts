import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ScoreConfig } from "./scoreconfig";



// ScoreConfigOutput
/** 
 * Represents a list of score configurations that apply in the country
**/
export class ScoreConfigOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ScoreConfigByCountry", elemType: ScoreConfig })
  scoreConfigByCountry?: ScoreConfig[];
}
