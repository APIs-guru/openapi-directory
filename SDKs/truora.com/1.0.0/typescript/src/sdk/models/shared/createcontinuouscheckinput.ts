import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CreateContinuousCheckInput
/** 
 *  Represents to CreateContinuousCheckInput
**/
export class CreateContinuousCheckInput extends SpeakeasyBase {
  @Metadata({ data: "form, name=check_id;" })
  checkId?: string;

  @Metadata({ data: "form, name=frequency;" })
  frequency?: string;

  @Metadata({ data: "form, name=status;" })
  status?: string;
}
