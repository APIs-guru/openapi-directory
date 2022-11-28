import { SpeakeasyBase } from "../../../internal/utils";
export declare enum UpdateContinuousCheckInputStatusEnum {
    Enabled = "enabled",
    Disabled = "disabled"
}
/**
 *  Represents to UpdateContinuousCheckInput
**/
export declare class UpdateContinuousCheckInput extends SpeakeasyBase {
    frequency: string;
    status: UpdateContinuousCheckInputStatusEnum;
}
