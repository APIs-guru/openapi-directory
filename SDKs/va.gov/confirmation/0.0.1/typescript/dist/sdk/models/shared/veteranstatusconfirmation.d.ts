import { SpeakeasyBase } from "../../../internal/utils";
export declare enum VeteranStatusConfirmationVeteranStatusEnum {
    Confirmed = "confirmed",
    NotConfirmed = "not confirmed"
}
/**
 * Veteran status confirmation for an individual
**/
export declare class VeteranStatusConfirmation extends SpeakeasyBase {
    veteranStatus?: VeteranStatusConfirmationVeteranStatusEnum;
}
