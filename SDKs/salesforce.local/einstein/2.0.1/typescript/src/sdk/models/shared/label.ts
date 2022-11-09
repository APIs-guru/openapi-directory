import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Label
/** 
 * Contains information about the label with which the example is associated.
**/
export class Label extends SpeakeasyBase {
  @Metadata({ data: "json, name=datasetId" })
  datasetId: number;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=numExamples" })
  numExamples?: number;
}
