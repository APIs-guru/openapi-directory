import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Rules that will get applied when creating or updating a payment channel for the given country
**/
export declare class PaymentChannelRule extends SpeakeasyBase {
    displayName: string;
    displayOrder?: number;
    element: string;
    maxLength?: number;
    minLength?: number;
    required: boolean;
    validation: string;
}
