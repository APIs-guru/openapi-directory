import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Label
/** 
 * Contains information about the label with which the example is associated.
**/
export class Label extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=datasetId" })
  datasetId: number;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=numExamples" })
  numExamples?: number;
}
