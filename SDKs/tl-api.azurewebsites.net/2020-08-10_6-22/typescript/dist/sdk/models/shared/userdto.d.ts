import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The UserDTO Class.
 * Contains relevant fields of User DTO by masking actual User entity's fields in application.
 *
**/
export declare class UserDto extends SpeakeasyBase {
    accountNumber?: string;
    externalEntityNumber?: string;
    guardian?: number;
    gymNumber?: string;
    introduceBy?: number;
    name?: string;
    number?: string;
    typeId?: number;
    userId?: number;
}
