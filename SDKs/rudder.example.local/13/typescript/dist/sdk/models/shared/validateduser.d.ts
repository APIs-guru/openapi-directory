import { SpeakeasyBase } from "../../../internal/utils";
/**
 * list of users with their workflow settings
**/
export declare class ValidatedUser extends SpeakeasyBase {
    isValidated: boolean;
    userExists: boolean;
    username: string;
}
