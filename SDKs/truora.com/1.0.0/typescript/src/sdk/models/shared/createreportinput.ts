import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CreateReportInput
/** 
 * Represents paramaters required to create a report
**/
export class CreateReportInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=name;" })
  name: string;
}
