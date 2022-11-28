import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The GymDTO Class.
 * Contains relevant fields of Gym DTO by masking actual Gym entity's fields in application.
 *
**/
export declare class GymDto extends SpeakeasyBase {
    externalGymNumber?: number;
    gymId?: number;
    gymName?: string;
    location?: string;
}
