import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ScoreConfig
/** 
 * Represents a set of configurations to determine the background check score
**/
export class ScoreConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=data_set" })
  dataSet: string;

  @Metadata({ data: "json, name=weight" })
  weight: string;
}
