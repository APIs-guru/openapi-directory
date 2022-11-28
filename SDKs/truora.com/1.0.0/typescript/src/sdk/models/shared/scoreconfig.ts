import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ScoreConfig
/** 
 * Represents a set of configurations to determine the background check score
**/
export class ScoreConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data_set" })
  dataSet: string;

  @SpeakeasyMetadata({ data: "json, name=weight" })
  weight: string;
}
