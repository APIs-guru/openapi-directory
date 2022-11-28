import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CreateContinuousCheckInput
/** 
 *  Represents to CreateContinuousCheckInput
**/
export class CreateContinuousCheckInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=check_id;" })
  checkId?: string;

  @SpeakeasyMetadata({ data: "form, name=frequency;" })
  frequency?: string;

  @SpeakeasyMetadata({ data: "form, name=status;" })
  status?: string;
}
