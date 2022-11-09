import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ScoreConfig } from "./scoreconfig";


// ScoreConfigOutput
/** 
 * Represents a list of score configurations that apply in the country
**/
export class ScoreConfigOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=ScoreConfigByCountry", elemType: shared.ScoreConfig })
  scoreConfigByCountry?: ScoreConfig[];
}
