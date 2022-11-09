import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum UpdateContinuousCheckInputStatusEnum {
    Enabled = "enabled"
,    Disabled = "disabled"
}


// UpdateContinuousCheckInput
/** 
 *  Represents to UpdateContinuousCheckInput
**/
export class UpdateContinuousCheckInput extends SpeakeasyBase {
  @Metadata({ data: "form, name=frequency;" })
  frequency: string;

  @Metadata({ data: "form, name=status;" })
  status: UpdateContinuousCheckInputStatusEnum;
}
