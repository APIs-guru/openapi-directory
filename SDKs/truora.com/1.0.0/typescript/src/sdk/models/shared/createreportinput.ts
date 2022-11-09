import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CreateReportInput
/** 
 * Represents paramaters required to create a report
**/
export class CreateReportInput extends SpeakeasyBase {
  @Metadata({ data: "form, name=name;" })
  name: string;
}
