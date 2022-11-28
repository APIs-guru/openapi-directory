import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum UpdateContinuousCheckInputStatusEnum {
    Enabled = "enabled",
    Disabled = "disabled"
}


// UpdateContinuousCheckInput
/** 
 *  Represents to UpdateContinuousCheckInput
**/
export class UpdateContinuousCheckInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=frequency;" })
  frequency: string;

  @SpeakeasyMetadata({ data: "form, name=status;" })
  status: UpdateContinuousCheckInputStatusEnum;
}
